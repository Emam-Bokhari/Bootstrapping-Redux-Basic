
import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    tasks: ITask[]
}

const initialState: IInitialState = {
    tasks: [
        {
            id: "T-001",
            title: "TypeScript Mastery",
            description: "Mastery typescript",
            priority: "High",
            isCompleted: false,
            dueDate: "2025-02"
        }
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export default taskSlice.reducer;