import path from 'path';

let ENVIRONMENT_CONFIG = {};
let LOCAL_CONFIG = {};
const CONFIG_FOLDER = path.resolve(process.cwd(), 'environment-configuration');
const DEFAULT_CONFIG = require(path.resolve(CONFIG_FOLDER, 'default'));

try {
  if (process.env.NODE_ENV === 'development') {
    LOCAL_CONFIG = require(path.resolve(CONFIG_FOLDER, 'locale'));
  }
} catch (e) {
  console.log('Cannot found locale.json file!');
}

try {
  ENVIRONMENT_CONFIG = require(path.resolve(
    CONFIG_FOLDER,
    `${process.env.APP_ENV}.json`
  ));
} catch (e) {
  console.log(`Configuration for "${process.env.APP_ENV}" was not found`);
}

module.exports = {
  ...DEFAULT_CONFIG,
  ...ENVIRONMENT_CONFIG,
  ...LOCAL_CONFIG,
  ...process.env,
  DEVELOPMENT: process.env.NODE_ENV === 'development'
};
