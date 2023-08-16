import { fetchTrendingMovies } from 'services/api';

export const App = () => {
  const getMovies = async () => {
    try {
      const movies = await fetchTrendingMovies();
      console.log('movies', movies);
    } catch (error) {
      console.log('error.message', error.message);
    }
  };

  getMovies();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
