// src/pages/WatchlistPage.jsx
import React from 'react';
import MovieCard from '../Components/MovieCard';

const WatchlistPage = ({ watchlist, onRemoveFromWatchlist }) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">My Watchlist</h2>
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
        <p>Your watchlist is empty. Add some movies!</p>
      )}
    </div>
  );
};

export default WatchlistPage;