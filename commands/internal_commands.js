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

export const internalCommands = {
  echo,
  pwd,
};
