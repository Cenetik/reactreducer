import { Reducer } from 'react';
import { TodoModel } from '../models/TodoModel';
import { TodoAction } from '../models/TodoAction';
import { getRandomInt } from '../utils/getRandomInt';

export const todoReducer: Reducer<TodoModel[] | undefined,TodoAction> = (value, action) => {
  switch (action.actionCode) {
    case 'ADD':  
        console.log('called reducer ADD');
        if(action.payload!==undefined){
        const todos = [
               ...value??[],
                action.payload
            ];        
        return todos;      
        }
        else {
            return value;
        }
    case 'DELETE':        
        console.log('called reducer DELETE');
        if (action.payload!==undefined){
        const newTodos = value?.filter((todo) => {
            return todo.id !== action.payload?.id;
        });
        return newTodos;    
        }
        else{
            return value;
        }      
  }
}; 