import addMovieToDb from "../../utils/movies/add-movie";

const addMovie = getRouterInstance => {
    const router = getRouterInstance();

    router.post('/movies/add', async (req, res) => {
        const movieData  = req.body;

        if(!movieData) {
            return res.status(400).json({message: 'No movie provided.'});
        }

        const data = await addMovieToDb(movieData);

        return res.status(201).json({data});
    });

    return router;
}

export default addMovie;
