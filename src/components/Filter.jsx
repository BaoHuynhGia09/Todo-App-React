function Filter({ filter, onFilter }) {
  return (
    <div className="flex justify-center gap-8 mb-10 text-2xl">
      <button
        className={
          filter === "all"
            ? "px-12 py-4 rounded-md bg-blue-500 text-white"
            : "px-12 py-4 rounded-md text-gray-600 hover:bg-gray-100"
        }
        onClick={() => onFilter("all")}
      >
        All
      </button>
      <button
        className={
          filter === "done"
            ? "px-12 py-4 rounded-md bg-blue-500 text-white"
            : "px-12 py-4 rounded-md text-gray-600 hover:bg-gray-100"
        }
        onClick={() => onFilter("done")}
      >
        Done
      </button>
      <button
        className={
          filter === "not"
            ? "px-12 py-4 rounded-md bg-blue-500 text-white"
            : "px-12 py-4 rounded-md text-gray-600 hover:bg-gray-100"
        }
        onClick={() => onFilter("not")}
      >
        Not Yet
      </button>
    </div>
  );
}

export default Filter;
