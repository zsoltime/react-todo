import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as actions from 'actions';

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text',
    };
    const res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: '30943',
        text: 'Learn Redux',
        completed: false,
        createdAt: new Date().getTime(),
        completedAt: null,
      },
    };
    const res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'New todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO',
      });
      expect(actions[0].todo).toInclude({
        text: todoText,
      });
      done();
    })
    .catch(done);
  });

  it('should generate add todos action', () => {
    const todos = [{
      id: '212',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 1234567,
    }];
    const action = {
      type: 'ADD_TODOS',
      todos,
    };
    const res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    const res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 3,
    };
    const res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
