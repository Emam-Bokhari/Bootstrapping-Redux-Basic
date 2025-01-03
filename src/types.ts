export interface ITask {
    id: string;
    title: string;
    description: string;
    priority: "high" | "medium" | "low";
    isCompleted: boolean;
    dueDate: string;
}