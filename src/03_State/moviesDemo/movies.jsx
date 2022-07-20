import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./movies.css";

//URL WITH NO Search 
const API_URL = "http://www.omdbapi.com?apikey=cd4c31d";

const Movies = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    // Triggered Once When 
    // Components is first loaded
    useEffect(() => {
        searchMovies(searchTerm);
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for movies"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>לא נמצאו סרטים </h2>
                </div>
            )}
        </div>
    );
};

export default Movies;