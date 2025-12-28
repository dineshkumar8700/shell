const cat = () => {
  console.log("cat command executed");
};

const ls = () => {
  console.log("ls command executed");
};

export const externalCommands = {
  cat,
  ls,
};
