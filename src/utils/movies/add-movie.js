import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import { v4 as uuid } from 'uuid';
import {MOVIES_PATH} from './const';

const addMovieToDb = async movieData => {
    const adapter = new FileAsync(MOVIES_PATH);
    const moviesDB = await low(adapter);
    await moviesDB.defaults({movies: []}).write();

    const newData = {
        ...movieData,
        id: uuid(),
    };

    await moviesDB
        .get('movies')
        .push(newData)
        .write();

    return newData;
}

export default addMovieToDb;
