import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/CounterSlice";
import taskSlice from './features/task/taskSlice'
import userSlice from './features/users/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: taskSlice,
    users: userSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
