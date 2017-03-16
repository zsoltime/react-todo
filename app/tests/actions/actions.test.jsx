import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import firebase, { firebaseRef } from 'app/firebase';
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

  it('should generate update todo action', () => {
    const action = {
      type: 'UPDATE_TODO',
      id: 3,
      updates: { completed: false },
    };
    const res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe('Tests w/ firebase todos', () => {
    let testTodoRef;

    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();

      testTodoRef.set({
        text: 'Something to do',
        createdAt: new Date().getTime(),
        completed: false,
      }).then(() => done());
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch update todo actions', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({
          completed: true,
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });
  });
});
