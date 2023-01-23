import React from "react";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";

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
                <p>
                    {item.genre_ids.map((id) => (
                        <Badge bg="danger">
                            {genreList.find((item) => item.id === id).name}
                        </Badge>
                    ))}
                </p>
                <div className="card-infoSub">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
