import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

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
    toggleConpleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const seletTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const seletFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleConpleteState, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
