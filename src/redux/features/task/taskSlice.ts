
import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    tasks: ITask[]
}

const initialState: IInitialState = {
    tasks: []
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        }
    },
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;