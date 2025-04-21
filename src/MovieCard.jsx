import React from 'react';

//This is for info of the movie that we are searching for.
//issue if there is no image, we will need to find/have a placeholder image
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}> 
      <div>
        <p>{Year}</p>
      </div>
      
      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;