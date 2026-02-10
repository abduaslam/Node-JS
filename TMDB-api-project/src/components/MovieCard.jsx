const IMG_URL = "https://image.tmdb.org/t/p/w500"

function MovieCard({ movie, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer hover:scale-110 transition duration-300"
    >
      <img
        src={
          movie.poster_path
            ? IMG_URL + movie.poster_path
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.title}
        className="rounded-lg"
      />

      {/* ⭐ Rating */}
      <span className="absolute top-2 right-2 bg-red-600 text-xs px-2 py-1 rounded">
        ⭐ {movie.vote_average.toFixed(1)}
      </span>

      <p className="text-sm mt-2 text-center">{movie.title}</p>
    </div>
  )
}

export default MovieCard
