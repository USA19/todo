import { Todo } from "../interfaces";

export const TODO_LIST = 'TODO_LIST';

export const getTodoList = (): Todo[] => {
  const list = localStorage.getItem(TODO_LIST)
  const parsedList: Todo[] = list ? JSON.parse(list || "") || [] : []
  return parsedList
}

export const setTodoList = (todoList: Todo[]) => {
  return localStorage.setItem(TODO_LIST, JSON.stringify(todoList))
}