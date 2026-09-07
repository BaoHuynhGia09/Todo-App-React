function TableDetail({ todo, onToggle, onClick }) {
  const handleChange = () => {
    onToggle(todo.id);
  };

  const handleOnclick = () => {
    onClick(todo.id);
  };

  return (
    <>
      <li className="grid grid-cols-[150px_1fr_140px_140px] gap-6 justify-center items-center py-3">
        <span className="text-4xl">{todo.id.slice(0, 5)}...</span>

        <span className=" text-gray-800 text-4xl">{todo.title}</span>

        <span>
          <input
            type="checkbox"
            className="w-16 h-16"
            checked={todo.completed}
            onChange={handleChange}
          />
        </span>

        <span>
          <button
            className=" text-red-500 hover:text-red-700 transition text-4xl"
            onClick={handleOnclick}
          >
            Delete
          </button>
        </span>
      </li>
    </>
  );
}

export default TableDetail;
