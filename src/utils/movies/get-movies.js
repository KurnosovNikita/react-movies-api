import FileAsync from "lowdb/adapters/FileAsync";
import {MOVIES_PATH} from "./const";
import low from "lowdb";

const getMovies = async () => {
    const adapter = new FileAsync(MOVIES_PATH);
    const moviesDB = await low(adapter);

    return await moviesDB
        .get('movies')
        .value();
}

export default getMovies;
