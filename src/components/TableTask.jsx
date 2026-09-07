import TableDetail from "./TableDetail";

function TableTask({ todos, onToggle, onClick }) {
  return (
    <>
      <div className="grid grid-cols-[150px_1fr_140px_140px] gap-6 items-center text-4xl">
        <span>Id</span>
        <span>Task</span>
        <span>Status</span>
        <span>Action</span>
      </div>
      <ul>
        {todos.map((todo) => (
          <TableDetail
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onClick={onClick}
          />
        ))}
      </ul>
    </>
  );
}

export default TableTask;
