
import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    tasks: ITask[]
}

const initialState: IInitialState = {
    tasks: [
        {
            id: "T-001",
            title: "Typescript",
            description: "Typescript Mastery",
            priority: "high",
            isCompleted: false,
            dueDate: "2025-01-03T12:34:56.789Z"
        }
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const id = crypto.randomUUID();
            const taskData = {
                ...action.payload,
                id,
                isCompleted: false,
            }
            state.tasks.push(taskData)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) => task.id === action.payload ? task.isCompleted = !task.isCompleted : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        }
    },
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;