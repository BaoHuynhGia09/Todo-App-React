import { useState } from "react";

function Input({ onSubmit }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
  };

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <form className="flex gap-3 mb-20" onSubmit={handleSubmit}>
        <input
          className="flex-1 border border-gray-300 rounded-lg px-6 py-4 text-4xl outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter a task..."
          onChange={onChange}
        ></input>
        <button
          type="submit"
          disabled={title ? false : true}
          className="bg-blue-500 text-white px-7 py-4 text-xl rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Input;
