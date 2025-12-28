const ls = () => {
  console.log("ls command executed");
};

const cat = () => {
  console.log("cat command executed");
};

const internalCommands = {
  ls,
};

const externalCommand = {
  cat,
};

const executeCommand = (command) => {
  if (internalCommands[command]) {
    return internalCommands[command]();
  }
  if (externalCommand[command]) {
    return externalCommand[command]();
  }

  console.log("Command not found:", command);
};

const main = () => {
  while (true) {
    const command = prompt("Type the command you want to execute:");
    executeCommand(command);
  }
};

main();
