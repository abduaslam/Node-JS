function CategoryTabs({ setCategory }) {
  return (
    <div className="flex gap-4 px-6 mb-6">
      <button
        onClick={() => setCategory("trending")}
        className="bg-red-600 px-4 py-2 rounded"
      >
        Trending
      </button>
      <button
        onClick={() => setCategory("topRated")}
        className="bg-gray-700 px-4 py-2 rounded"
      >
        Top Rated
      </button>
    </div>
  )
}

export default CategoryTabs
