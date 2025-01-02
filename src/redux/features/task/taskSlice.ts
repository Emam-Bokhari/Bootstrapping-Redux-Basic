import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "T-001",
    title: "TypeScript Mastery",
    description: "Mastery typescript",
    priority: "High",
    isCompleted: false,
    dueDate: "2025-02"
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
})

export default taskSlice.reducer;