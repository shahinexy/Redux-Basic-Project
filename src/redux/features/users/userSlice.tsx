import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [],
};

type DraftData = Pick<IUser, "name">;

const createUser = (payload: DraftData): IUser => {
  return { id: nanoid(), ...payload };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const SeletUser = (state: RootState) => {
  return state.users.users;
};

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
