const echo = (args) => {
  if (args) {
    console.log(...args);
  } else {
    console.log();
  }
};

const pwd = () => {
  console.log(Deno.cwd());
};

const exit = () => {
  console.log(
    `Saving session...
    ...copying shared history...
    ...saving history...truncating history files...
    ...completed.,`,
  );
};

export const internalCommands = {
  echo,
  pwd,
  exit,
};
