**Movie Watchlist App**
A clean and modern web application built with React and Vite that allows users to browse popular movies, search for specific titles, and manage a personal watchlist. This app leverages the TMDB API for movie data and uses the browser's localStorage to persist the user's watchlist.

**Features**
Browse Popular Movies: See a list of the most popular movies on page load.

Search Functionality: Find any movie by its title using the TMDB database.

Personal Watchlist: Add movies to a personal watchlist or remove them.

Client-Side Persistence: Your watchlist is saved in your browser, so it's there when you come back.

Responsive Design: A clean, modern UI that works on both desktop and mobile devices.


**Setup and Local Installation**
To run this project locally, follow these simple steps:

Clone the repository:

git clone https://github.com/your-username/your-repository-name.git
Navigate to the project directory:

cd your-repository-name
Install dependencies:

npm install

**Set up environment variables:**
You will need an API key from The Movie Database (TMDB).

Create a file named .env in the root of the project.

Add your TMDB API key to the file like this:

VITE_APP_TMDB_API_KEY="your_api_key_goes_here"

**Run the development server:**

npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
