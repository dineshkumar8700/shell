import { internalCommands } from "./commands/internalCommand.js";
import { externalCommands } from "./commands/externalCommand.js";

const executeCommand = (command) => {
  const { cmd, args } = command;

  if (internalCommands[cmd]) {
    return internalCommands[cmd](args);
  }
  if (externalCommands[cmd]) {
    return externalCommands[cmd](args);
  }

  console.log("Command not found:", cmd);
};

const parseCommand = (command) => {
  const [cmd, ...args] = command.trim().split(" ");
  return args.length === 0 ? { cmd } : { cmd, args };
};

const main = () => {
  while (true) {
    const command = prompt("\nType the command you want to execute:");
    const parsedCommand = parseCommand(command);
    executeCommand(parsedCommand);
  }
};

main();
