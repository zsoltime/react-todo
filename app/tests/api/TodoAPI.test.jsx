const expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('reactTodos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [{
        id: '12',
        text: 'Test todo',
        completed: false,
      }];
      TodoAPI.setTodos(todos);
      
      const actualTodos = JSON.parse(localStorage.getItem('reactTodos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      const todos = { a: 5 };
      TodoAPI.setTodos(todos);

      expect(localStorage.getItem('reactTodos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return an empty array for bad localStorage data', () => {
      const actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      const todos = [{
        id: '12',
        text: 'Test todo',
        completed: false,
      }];

      localStorage.setItem('reactTodos', JSON.stringify(todos));
      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
});
