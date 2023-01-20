import React from "react";

function Banner({ movie }) {
    console.log("Banner movie", movie);
    return (
        <div>
            <div
                className="banner"
                style={{
                    backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces/${movie.backdrop_path})`,
                }}
            >
                <div className="banner-info">
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
