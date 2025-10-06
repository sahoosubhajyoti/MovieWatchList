// src/pages/WatchlistPage.jsx
import React from 'react';
import MovieCard from '../Components/MovieCard';
import { Link } from 'react-router-dom';

const WatchlistPage = ({ watchlist, onRemoveFromWatchlist }) => {
  return (
    <div className="p-8">
      <h2 className="text-white text-3xl font-bold mb-6">My Watchlist</h2>
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onRemoveFromWatchlist={onRemoveFromWatchlist}
              isWatchlist={true} // Tell the card it's in the watchlist
            />
          ))}
        </div>
      ) : (
       <div className="flex flex-col items-center justify-center text-center py-24">
  {/* Magnifying glass with plus icon */}
  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
  </svg>
  <h3 className="text-3xl font-bold text-white">Find Your Next Favorite Movie</h3>
  <p className="text-gray-400 mt-2 mb-6">Your watchlist is currently empty. Start browsing to add movies!</p>
  <Link 
    to="/"
    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
  >
    Browse Movies
  </Link>
</div>
      )}
    </div>
  );
};

export default WatchlistPage;