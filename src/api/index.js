import getRouterInstance from '../utils/get-router-instance';
import searchMovies from "../components/movies/search-movies";
import getMovieById from "../components/movies/get-movie-by-id";
import addMovie from "../components/movies/add-movie";

const apiRouter = getRouterInstance();
// product public API
apiRouter.use(addMovie(getRouterInstance));
apiRouter.use(searchMovies(getRouterInstance));
apiRouter.use(getMovieById(getRouterInstance));

export default apiRouter;
