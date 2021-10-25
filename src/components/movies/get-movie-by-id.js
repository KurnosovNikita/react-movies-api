import getMovies from '../../utils/movies/add-movie';

const getMovieById = getRouterInstance => {
    const router = getRouterInstance();

    router.get('/movies/:movieId', async (req, res) => {
        const { movieId } = req.params;

        if(!movieId) {
            return res.status(400).json({message: 'No movie id provided.'});
        }

        const movies = await getMovies();

        const result = movies.find((movie) => `${movie.id}` === `${movieId}`);

        return res.status(200).json({data: result});
    });

    return router;
}

export default getMovieById;
