import { internalCommands } from "./commands/internal_commands.js";
import { externalCommands } from "./commands/external_commands.js";
import { help } from "./help.js";

const executeCommand = (command) => {
  const { cmd, args } = command;
  if (cmd === "--help") return help();
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
  console.log("Welcome Back. Type --help to see available commands");
  while (true) {
    const command = prompt("\n> ");
    const parsedCommand = parseCommand(command);
    executeCommand(parsedCommand);
  }
};

main();
