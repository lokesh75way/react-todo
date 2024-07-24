import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import tasksReducer from "./reducers/taskReducer";
import listReducer from "./reducers/listReducer";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
