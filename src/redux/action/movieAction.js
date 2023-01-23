import api from "../api";
const APIkey = process.env.REACT_APP_APIKEY;

function getMovies() {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIE_REQUEST" });

            const popularMovieApi = await api.get(
                `/movie/popular?api_key=${APIkey}&language=en-US&page=1`
            );
            const topRatedMovieApi = await api.get(
                `/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`
            );
            const upcomingMovieApi = await api.get(
                `/movie/upcoming?api_key=${APIkey}&language=en-US&page=1`
            );
            const genreApi = await api.get(
                `/genre/movie/list?api_key=${APIkey}&language=en-US`
            );

            let [popularMovies, topRatedMovies, upcomingMovies, genreList] =
                await Promise.all([
                    popularMovieApi,
                    topRatedMovieApi,
                    upcomingMovieApi,
                    genreApi,
                ]);

            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList: genreList.data.genres,
                },
            });
        } catch (error) {
            dispatch({ type: "GET_MOVIE_FAIL" });
        }
    };
}

export const movieAction = { getMovies };
