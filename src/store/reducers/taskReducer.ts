import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ task: Task }>) => {
      state.tasks.push(action.payload.task);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<{ task: Task }>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.task.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload.task;
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
