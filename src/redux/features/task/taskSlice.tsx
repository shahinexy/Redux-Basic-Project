import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[],
    filter: 'all'| 'high' | 'medium'
}

const initialState: InitialState = {
    tasks: [
        {
            id: '12334',
            title: 'this is title',
            description: 'this is description',
            dueDate: '2025-11',
            isCompleted: false,
            priority: 'High'
        },
        {
            id: '12653',
            title: 'this is New Title',
            description: 'this is New description',
            dueDate: '2025-11',
            isCompleted: false,
            priority: 'Low'
        }
    ],
    filter: 'all'
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})

export const seletTasks= (state: RootState)=>{
    return state.todo.tasks
}
export const seletFilter= (state: RootState)=>{
    return state.todo.filter
}

export default taskSlice.reducer