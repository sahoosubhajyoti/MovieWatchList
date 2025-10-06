import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Navbar = ({onSearch}) => {
    const navigate = useNavigate();
     const [query, setQuery] = useState('');
    const handleClick = () => {
        navigate('/watchlist');
    }
      const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    onSearch(query);
  };
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
         <Link to="/" className="text-white text-2xl font-bold">MovieZone</Link>
      <div className='flex items-center'>

       <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-gray-700 text-white rounded-md p-2"
          />
        </form>
        <button onClick={handleClick}className="text-white ml-4">My Watchlist</button>
      </div>
    </nav>
  );
};

export default Navbar;