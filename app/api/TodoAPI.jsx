module.exports = {
  setTodos(todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem('reactTodos', JSON.stringify(todos));
      return todos;
    }
    return undefined;
  },
  getTodos() {
    const strTodos = localStorage.getItem('reactTodos');
    let todos = [];

    try {
      todos = JSON.parse(strTodos);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }

    return Array.isArray(todos) ? todos : [];
  },
};
