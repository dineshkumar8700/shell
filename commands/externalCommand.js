const cat = (args) => {
  try {
    const path = args[0];
    console.log(Deno.readTextFileSync(path));
  } catch (err) {
    console.log("No such file or directory");
  }
};

const ls = () => {
  console.log("ls command executed");
};

export const externalCommands = {
  cat,
  ls,
};
