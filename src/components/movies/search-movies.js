import getMovies from "../../utils/movies/get-movies";

const SEARCH_BY_PARAMS = ['title', 'genres'];

const searchMovies = getRouterInstance => {
    const router = getRouterInstance();

    router.post('/movies', async (req, res) => {
        const { query, searchBy } = req.body;
        const movies = await getMovies();

        if(!query || !SEARCH_BY_PARAMS.includes(searchBy)) {
            return res.status(200).json({data: movies, total: movies.length});
        }

        const results = movies.filter((movie) => movie[searchBy].includes(query));

        return res.status(200).json({data: results, total: results.length});
    });

    return router;
}

export default searchMovies;
