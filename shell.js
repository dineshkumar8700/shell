import { internalCommands } from "./commands/internalCommand.js";
import { externalCommands } from "./commands/externalCommand.js";

const executeCommand = (command) => {
  if (internalCommands[command]) {
    return internalCommands[command]();
  }
  if (externalCommands[command]) {
    return externalCommands[command]();
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
