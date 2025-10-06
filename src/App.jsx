// src/App.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './pages/Homepage';
import WatchlistPage from './Components/WatchListPage';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;
  const fetchMovies = async (url) => {
   try{
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    }
    catch(error) {
      console.log("Error fetching movies:", error);
      setMovies([]);
    }
   }
   useEffect(() => {
    const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(popularMoviesUrl);
   },[]);
     const handleSearch = (query) => {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
      if(query) {
        fetchMovies(searchUrl);
      } else {
        const popularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1';
        fetchMovies(popularMoviesUrl);
     }
  }
  //----Watchlist Handlers----//


    useEffect(() => {
    const savedWatchlist = localStorage.getItem('watchList');
    if (savedWatchlist) {
      setWatchList(JSON.parse(savedWatchlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);

  const addToWatchList = (movie) => {
    if(!watchList.find((m) => m.id === movie.id)) {
      setWatchList([...watchList, movie]);
    }
    else{
      alert("Movie already in watchlist");
    }
  }
    const removeFromWatchlist = (movieToRemove) => {
    const newWatchlist = watchList.filter(item => item.id !== movieToRemove.id);
    setWatchList(newWatchlist);
  };

  return (
    <BrowserRouter>
    <div className="bg-black min-h-screen">
      <Navbar onSearch={handleSearch}/>
      <Routes>
       <Route 
            path="/" 
            element={<HomePage movies={movies} onAddToWatchlist={addToWatchList} watchList={watchList} />} 
          />
                <Route 
            path="/watchlist" 
            element={<WatchlistPage watchlist={watchList} onRemoveFromWatchlist={removeFromWatchlist} />} 
          />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;