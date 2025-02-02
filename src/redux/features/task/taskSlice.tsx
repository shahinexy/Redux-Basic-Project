import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium";
}

const initialState: InitialState = {
  tasks: [],
  filter: "all",
};

type DraftData = Pick<ITask, "title" | "description" | "priority" | "dueDate">;

const createTask = (payload: DraftData): ITask => {
  return { id: nanoid(), isCompleted: false, ...payload };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);

      state.tasks.push(taskData);
    },
  },
});

export const seletTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const seletFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
