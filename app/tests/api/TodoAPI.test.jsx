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

  describe('filterTodos', () => {
    const todos = [{
      id: '1',
      text: 'First item',
      completed: true,
    }, {
      id: '2',
      text: 'Second item',
      completed: false,
    }, {
      id: '3',
      text: 'Third item',
      completed: true,
    }];

    it('should return all items if showCompleted is true', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return non-completed items if showCompleted is false', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should filter todos by searchText', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'second');
      expect(filteredTodos.length).toBe(1);
    });

    it('should be case insensitive', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'fiRsT');
      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos if searchText is empty', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should sort by completed status', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });
  });
});
