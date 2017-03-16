const expect = require('expect');
const reducers = require('reducers');
const df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'walk',
      };
      const res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      const res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: '4gj41',
          text: 'Buy milk',
          completed: false,
          createdAt: new Date().getTime(),
          completedAt: null,
        },
      };
      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      const todos = [{
        id: 0,
        text: 'Buy milk',
        completed: true,
        createdAt: new Date().getTime(),
        completedAt: new Date().getTime(),
      }];
      const updates = {
        completed: false,
        completedAt: null,
      };
      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates,
      };
      const res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toBe(updates.completed);
      expect(res[0].completedAt).toBe(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
  });

  it('should add existing todos', () => {
    const todos = [{
      id: '111',
      text: 'Buy milk',
      completed: false,
      createdAt: new Date().getTime(),
      completedAt: undefined,
    }];
    const action = {
      type: 'ADD_TODOS',
      todos,
    };
    const res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toBe(1);
    expect(res[0]).toEqual(todos[0]);
  });
});
