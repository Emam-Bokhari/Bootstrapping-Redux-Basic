
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    task: ITask[]
}

const initialState: IInitialState = {
    task: [
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

export default taskSlice.reducer;