import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "./features/task/taskSlice"

export const store = configureStore({
    reducer: {
        task: taskSliceReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch