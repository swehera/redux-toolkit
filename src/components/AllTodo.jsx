import { useDispatch, useSelector } from "react-redux";
import { deleteTodos } from "../redux/TodoSlice";
import toast, { Toaster } from "react-hot-toast";

const AllTodo = () => {
  const dispatch = useDispatch();
  const { todosArray } = useSelector((state) => state?.todos);
  return (
    <div>
      <div className=" flex items-center justify-center">
        {todosArray.length > 0 ? (
          <div className=" w-2/3 md:w-1/3">
            <p className="text-2xl font-bold text-center mt-5">All Todo Here</p>
            {todosArray.map((item) => (
              <div
                key={item?.id}
                className=" bg-slate-900 m-2 flex justify-between px-3 py-2 rounded-md"
              >
                <p className=" text-white">{item?.modifiedTodo}</p>
                <p
                  onClick={() => {
                    dispatch(deleteTodos(item?.id)),
                      toast.error("deleted successfully");
                  }}
                  className=" text-red-400 font-bold cursor-pointer"
                >
                  X
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className=" mt-10 text-center text-2xl font-bold text-red-500">
            No Todo Added
          </p>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default AllTodo;
