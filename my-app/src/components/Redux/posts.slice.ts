import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  id: number;
  todo: string;
}

interface ITodos {
  todos: ITodo[];
}

export const initialState: ITodos = {
  todos: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) =>
      (state = { ...state, todos: [...state.todos, action.payload] }),
    delTodo: (state, action: PayloadAction<number>) =>
      (state = {
        ...state,
        todos: state.todos.filter((el) => el.id !== +action.payload),
      }),
    editTodo: (state, action: PayloadAction<ITodo>) => {
      state = {
        ...state,
        todos: state.todos.map((el): any => {
          if (el.id === +action.payload.id) {
            el.todo = action.payload.todo;
          }
        }),
      };
    },
  },
});

export const { addTodo, delTodo, editTodo } = postsSlice.actions;

export default postsSlice.reducer;
