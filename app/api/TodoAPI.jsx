module.exports = {
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
