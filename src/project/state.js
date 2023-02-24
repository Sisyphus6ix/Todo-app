export const state = {
  projects: [],
  selectedProjectId: undefined,
};

export const addProject = (project) => {
  state.projects.push(project);
};

export const selectProject = (project) => {
  const index = state.projects.findIndex((p) => p === project);

  state.selectedProjectId = index;
};

export const getSelectedProject = () => {
  if (state.selectedProjectId === undefined) {
    return;
  }

  return state.projects[state.selectedProjectId];
};

export const deleteProject = (project) => {
  const index = state.projects.find((p) => p === project);

  state.projects.splice(index, 1);
};
