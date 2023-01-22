import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/action/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import FadeLoader from "react-spinners/FadeLoader";
import Footer from "../components/Footer";

function Home() {
    const dispatch = useDispatch();
    const { popularMovies, topRatedMovies, upcomingMovies, loading } =
        useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="loader-container">
                <FadeLoader color="white" loading={loading} size={150} />
            </div>
        );
    }

    return (
        <div>
            {/* {popularMovies.results && (
                <Banner movie={popularMovies.results[0]} />
            )} */}
            <Banner movie={popularMovies.results[0]} />

            <div className="slide-container">
                <h2>Popular Movie</h2>
                <MovieSlide movie={popularMovies} />
                <h2>Top Rated Movie</h2>
                <MovieSlide movie={topRatedMovies} />
                <h2>Upcoming Movie</h2>
                <MovieSlide movie={upcomingMovies} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
