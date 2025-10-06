
import React from 'react';

const MovieCard = ({ movie, onAddToWatchlist, onRemoveFromWatchlist, isWatchlist }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750";
  
 
  const renderButton = () => {
    // If onRemoveFromWatchlist function exists, it means we are on the WatchlistPage
    if (onRemoveFromWatchlist) {
      return (
        <button
          onClick={() => onRemoveFromWatchlist(movie)}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded mt-2 hover:bg-red-700 transition-colors"
        >
          Remove
        </button>
      );
    }
    // If it's already in the watchlist (but we're on the homepage)
    if (isWatchlist) {
      return (
        <button
          disabled
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded mt-2 cursor-not-allowed"
        >
          In Watchlist
        </button>
      );
    }
    // Default "Add to Watchlist" button
    return (
      <button
        onClick={() => onAddToWatchlist(movie)}
        className="bg-indigo-500 text-white font-bold py-2 px-4 rounded mt-2 hover:bg-indigo-600 transition-colors"
      >
        Add to Watchlist
      </button>
    );
  };


  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img
        src={posterUrl}
        alt={`${movie.title} Poster`}
        className="w-full"
      />
      <div className="p-4 flex flex-col">
        <h3 className="text-white text-lg font-bold truncate flex-grow">{movie.title}</h3>
        {renderButton()}
      </div>
    </div>
  );
};

export default MovieCard;