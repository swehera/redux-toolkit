import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/ui/Container";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodos } from "./redux/TodoSlice";

const App = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  // const [todoArray, setTodoArray] = useState([]);
  const { todosArray } = useSelector((state) => state?.todos);

  const handleTodo = () => {
    if (todo === "") {
      toast.error("Enter the Todo");
    } else {
      const id = uuidv4();
      const modifiedTodo = todo;
      const newTodo = { modifiedTodo, id };
      dispatch(addTodos(newTodo));
      setTodo("");
      toast.success("Todo Added Succesfully");
    }
  };
  //console.log(todoArray);
  console.log(useSelector((state) => state?.todos));
  return (
    <div>
      <Container className="flex gap-2 items-center sm:justify-between md:justify-center">
        <div className=" flex relative w-2/3 md:w-1/3">
          <input
            type="text"
            placeholder="add-todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            className=" mx-3 md:mx-0 outline-0 border-solid border-[1px] border-gray-400 py-2 px-1 rounded-md flex-1"
          />
          {todo !== "" && (
            <p
              onClick={() => setTodo("")}
              className=" absolute -right-10 md:right-2 top-2 cursor-pointer"
            >
              X
            </p>
          )}
        </div>
        <button
          onClick={handleTodo}
          className=" bg-slate-900 py-1 px-3 rounded-md text-white"
        >
          Add Todo
        </button>

        <Toaster />
      </Container>
      <div className=" flex items-center justify-center">
        {todosArray.length > 0 ? (
          <div className=" w-2/3 md:w-1/3">
            {todosArray.map((item) => (
              <div
                key={item?.id}
                className=" bg-slate-900 m-2 flex justify-between px-3 py-2 rounded-md"
              >
                <p className=" text-white">{item?.modifiedTodo}</p>
                <p
                  onClick={() => {
                    dispatch(deleteTodos(item?.id)),
                      toast.error("Deleted Successfully");
                  }}
                  className=" text-red-400 font-bold cursor-pointer"
                >
                  X
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className=" text-center text-2xl font-bold text-red-500">
            No Todo Added
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
