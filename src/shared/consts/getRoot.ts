let root: HTMLElement | null = null;

export const getRoot = () => {
  if (!root) {
    root = document.getElementById("app") ?? document.body;

    return root;
  }

  return root;
};
