import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userParams } from "react-router-dom";
import { movieAction } from "../redux/action/movieAction";

function MovieDetail() {
    const { id } = userParams();
    const { detailMovies, loading } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getDetailMovies(id));
    }, []);

    return <div>MovieDetail</div>;
}

export default MovieDetail;
