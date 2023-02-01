import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { movieAction } from "../redux/action/movieAction";
import MovieExplain from "../components/MovieExplain";
import Footer from "../components/Footer";

function MovieDetail() {
    const { id } = useParams();
    const { detailMovies, loading } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getDetailMovies(id));
    }, []);

    if (loading) {
        return (
            <div className="loader-container">
                <FadeLoader color="white" loading={loading} size={150} />
            </div>
        );
    }

    return (
        <div>
            {console.log("detailMovies", detailMovies)}
            <MovieExplain item={detailMovies} />
            <br />
            <br />
            <h1>영화 리뷰 넣을 곳</h1>
            <Footer />
        </div>
    );
}

export default MovieDetail;
