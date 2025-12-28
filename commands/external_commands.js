const cat = (args) => {
  try {
    const path = args[0];
    console.log(Deno.readTextFileSync(path));
  } catch (_err) {
    console.log("No such file or directory");
  }
};

const ls = () => {
  // console.log("ls command executed");
  console.log(Deno.run({ cmd: ["ls", "-l", "."] }));
};

const add = (args) => {
  try {
    const sum = args.map((num) => parseInt(num)).reduce((sum, num) =>
      sum + num
    );
    console.log(sum);
  } catch (_err) {
    console.log("Give at least 1 number");
  }
};

export const externalCommands = {
  cat,
  ls,
  add,
};
