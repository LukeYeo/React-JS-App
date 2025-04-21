// imports 
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

//API key for OMDB
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  //need a search terms for the movie , just like use state 
  const [searchTerm, setSearchTerm] = useState("");
  // This is to map all our movies by creating a new state 
  const [movies, setMovies] = useState([]);
  
  // the use effect for the movies
  useEffect(() => {
    searchMovies("Batman");
  }, []);
 
  //the search movie function, using await and fetch
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search); //not a console log to check anymore , now we can set it by a state
  };
  // the button doesnt work so instead , use the enter key from keyboard
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="app">
      <h1>Movie Search</h1>

      <div className="search">
        <input //need to have placeholder, value and onChange
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} // Handle Enter key press
          placeholder="Search for movies"
        />
        {/* Remove the onClick event for the search icon , sadly doesnt work */}
        <img src={SearchIcon} alt="search" className="search-icon" />
      </div>
      
      {movies?.length > 0 ? (  //for the movie when there is more than 1 outcome then map it properly
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        //if no movies found 
        <div className="empty"> 
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;