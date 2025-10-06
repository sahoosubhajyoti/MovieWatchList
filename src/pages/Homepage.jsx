import React, { use } from 'react';
import MovieCard from '../Components/MovieCard';
import { useState, useEffect } from 'react';

const HomePage = ({movies, onAddToWatchlist, watchList}) => {
    
  return (
    <div className="p-8">
      <h2 className="text-white text-3xl font-bold mb-6">Popular Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => {
          // Check if the movie is already in the watchlist
          const isInWatchlist = watchList.find((m) => m.id === movie.id);
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddToWatchlist={onAddToWatchlist}
              isWatchlist={isInWatchlist} // Pass true if it's already added
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;