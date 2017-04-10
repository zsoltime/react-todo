import firebase, { firebaseRef } from 'app/firebase';

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText,
  };
};

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo,
  };
};

export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    const todo = {
      text,
      completed: false,
      createdAt: new Date().getTime(),
      completedAt: null,
    };
    const todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key,
      }));
    });
  };
};

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos,
  };
}

export const startAddTodos = () => {
  return (dispatch, getState) => {
    const todosRef = firebaseRef.child('todos');
    return todosRef.once('value').then((snapshot) => {
      const todos = snapshot.val() || {};
      const parsedTodos = [];

      Object.keys(todos).forEach((id) => {
        parsedTodos.push({
          id,
          ...todos[id],
        });
      });

      dispatch(addTodos(parsedTodos));
    });
  };
};

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
};

export const updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates,
  };
};

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const todoRef = firebaseRef.child(`todos/${id}`);
    const updates = {
      completed,
      completedAt: completed ? new Date().getTime() : null,
    };

    return todoRef.update(updates)
    .then(() => {
      dispatch(updateTodo(id, updates));
    });
  }
};
