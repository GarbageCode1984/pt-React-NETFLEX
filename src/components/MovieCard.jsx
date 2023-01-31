import React from "react";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";

function MovieCard({ item }) {
    const { genreList } = useSelector((state) => state.movie);
    const navigate = useNavigate();

    const gotoDetail = () => {
        navigate(`/movies/${item.id}`);
    };

    return (
        <div
            onClick={gotoDetail}
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
                    <span className="star">⭐ {item.vote_average}</span>
                    <span className={item.abult ? "r-rated" : "g-rated"}>
                        {" "}
                        {item.abult ? "R-rated" : "G-rated"}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
