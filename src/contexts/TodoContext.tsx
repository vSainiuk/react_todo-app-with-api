import React, { useMemo, useState } from 'react';
import { Todo } from '../types/Todo';
import { Filtering } from '../types/Filtering';
import { TempTodo } from '../types/TempTodo';

export interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  filtering: Filtering;
  setFiltering: React.Dispatch<React.SetStateAction<Filtering>>;
  loadingAllTodos: boolean;
  setLoadingAllTodos: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  tempTodo: TempTodo | null;
  setTempTodo: React.Dispatch<React.SetStateAction<TempTodo | null>>
  editingTodo: Todo | {}
  setEditingTodo: React.Dispatch<React.SetStateAction<Todo>>
  loadingTodo: Todo | null
  setLoadingTodo: React.Dispatch<React.SetStateAction<Todo | null>>

}

export const TodoContext = React.createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
  filtering: Filtering.ALL,
  setFiltering: () => {},
  loadingAllTodos: false,
  setLoadingAllTodos: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
  tempTodo: null,
  setTempTodo: () => {},
  editingTodo: {},
  setEditingTodo: () => {},
  loadingTodo: null,
  setLoadingTodo: () => {},

});

interface Props {
  children: React.ReactNode
}

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filtering, setFiltering] = useState(Filtering.ALL);
  const [loadingAllTodos, setLoadingAllTodos] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [tempTodo, setTempTodo] = useState<TempTodo | null>(null);
  const [editingTodo, setEditingTodo] = useState({} as Todo);
  const [loadingTodo, setLoadingTodo] = useState<Todo | null>(null);

  const value: TodoContextType = useMemo(() => (
    {
      todos,
      setTodos,
      filtering,
      setFiltering,
      loadingAllTodos,
      setLoadingAllTodos,
      errorMessage,
      setErrorMessage,
      tempTodo,
      setTempTodo,
      editingTodo,
      setEditingTodo,
      loadingTodo,
      setLoadingTodo,
    }
  ), [
    todos,
    filtering,
    loadingAllTodos,
    errorMessage,
    tempTodo,
    editingTodo,
    loadingTodo]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};