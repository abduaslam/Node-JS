import { useEffect, useState } from "react"
import MovieCard from "./components/MovieCard"
import MovieModal from "./components/MovieModal"
import CategoryTabs from "./components/CategoryTabs"

const API_KEY = "f0fe6eaebbd02a2c22cc3aff6ff057c8"

const endpoints = {
  trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  search: (query) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
}

function App() {
  const [movies, setMovies] = useState([])
  const [category, setCategory] = useState("trending")
  const [search, setSearch] = useState("")
  const [selectedMovie, setSelectedMovie] = useState(null)

  // Fetch category movies
  useEffect(() => {
    fetch(endpoints[category])
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
  }, [category])

  // 🧠 Debounced search
  useEffect(() => {
    if (!search) return

    const timer = setTimeout(() => {
      fetch(endpoints.search(search))
        .then((res) => res.json())
        .then((data) => setMovies(data.results))
    }, 500)

    return () => clearTimeout(timer)
  }, [search])

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center px-6 py-4">
        <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>

        <input
          type="text"
          placeholder="Search movies..."
          className="px-4 py-2 rounded bg-gray-800 w-full sm:w-64 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Categories */}
      <CategoryTabs setCategory={setCategory} />

      {/* Movies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 sm:px-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          close={() => setSelectedMovie(null)}
        />
      )}
    </div>
  )
}

export default App
