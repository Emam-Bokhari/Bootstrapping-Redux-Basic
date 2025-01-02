export interface IInitialState {
    id: string;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    isCompleted: boolean;
    dueDate: string;
}