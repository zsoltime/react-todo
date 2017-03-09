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
  filterTodos(todos, showCompleted, searchText) {
    return todos
      .filter(({ completed }) => !completed || showCompleted)
      .filter(({ text }) => {
        const lowerCaseText = text.toLowerCase();
        const lowerCaseSearchText = searchText.toLowerCase();
        return (searchText.length === 0 ||
          lowerCaseText.indexOf(lowerCaseSearchText) > -1);
      })
      .sort((a, b) => {
        if (a.completed && !b.completed) {
          return 1;
        } else if (!a.completed && b.completed) {
          return -1;
        }
        return 0;
      });
  },
};
