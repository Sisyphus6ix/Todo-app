export const clearTasks = (project) => {
  const checkedTasks = project.tasks.filter((task) => task.checked);
  const taskIndices = checkedTasks.map((task) =>
    project.tasks.findIndex((t) => t === task)
  );

  taskIndices.forEach((index) => {
    project.tasks.splice(index, 1);
  });
};
