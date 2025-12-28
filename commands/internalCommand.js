const echo = (args) => {
  if (args) {
    console.log(...args);
  } else {
    console.log();
  }
};

export const internalCommands = {
  echo,
};
