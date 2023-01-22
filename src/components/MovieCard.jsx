import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap/Badge";

function MovieCard({ item }) {
    const { genreList } = useSelector((state) => state.movie);

    return (
        <div
            className="slide-card"
            style={{
                backgroundImage: `url(
                https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}
            )`,
            }}
        >
            <div className="card-info">
                <h5>{item.title}</h5>
                <p></p>
                <div className="card-infoSub"></div>
            </div>
        </div>
    );
}

export default MovieCard;
