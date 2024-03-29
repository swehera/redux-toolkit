import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosArray: [],
};

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todosArray.push(action.payload);
    },
    deleteTodos: (state, action) => {
      state.todosArray = state.todosArray.filter(
        (item) => item?.id !== action?.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodos, deleteTodos } = counterSlice.actions;

export default counterSlice.reducer;
