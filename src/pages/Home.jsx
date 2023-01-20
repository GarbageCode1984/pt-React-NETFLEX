import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/action/movieAction";

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);
    return <div>Home</div>;
}

export default Home;
