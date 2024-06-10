import { TodoModel } from "./TodoModel";

export type TodoAction = {
    actionCode: string;
    payload?: TodoModel;
}