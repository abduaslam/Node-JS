const IMG_URL = "https://image.tmdb.org/t/p/w500"

function MovieModal({ movie, close }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-gray-900 max-w-lg w-full p-6 rounded-lg relative">
        <button
          onClick={close}
          className="absolute top-2 right-3 text-xl"
        >
          ✖
        </button>

        <img
          src={IMG_URL + movie.poster_path}
          alt={movie.title}
          className="rounded mb-4"
        />

        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p className="text-sm text-gray-300">{movie.overview}</p>

        <p className="mt-3">⭐ Rating: {movie.vote_average}</p>
        <p>📅 Release: {movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieModal
