export interface ITask {
    id: string;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    isCompleted: boolean;
    dueDate: string;
}