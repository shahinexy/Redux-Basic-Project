import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../users/userSlice";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [],
  filter: "all",
};

type DraftData = Pick<
  ITask,
  "title" | "description" | "priority" | "dueDate" | "assignTo"
>;

const createTask = (payload: DraftData): ITask => {
  return {
    ...payload,
    id: nanoid(),
    isCompleted: false,
    assignTo: payload.assignTo ? payload.assignTo : null,
  };
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
    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(removeUser, (state, action )=>{
      state.tasks.forEach(task => task.assignTo === action.payload ? task.assignTo = null : task)
    })
  }
});

export const seletTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};
export const seletFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleConpleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
