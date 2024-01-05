import { addTodo, removeTodo, updateTodo, findById } from "@/mutation/todo";
export const mutationResolver = {
  Mutation: {
    findById : findById,
    addTodo: addTodo,
    removeTodo: removeTodo,
    updateTodo: updateTodo,
  },
};
