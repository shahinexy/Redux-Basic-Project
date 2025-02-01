import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    task: ITask[]
}

const initialState: InitialState = {
    task: [
        {
            id: '12334',
            title: 'this is title',
            description: 'this is description',
            dueDate: '2025-11',
            isCompleted: false,
            priority: 'High'
        }
    ]
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})

export default taskSlice.reducer