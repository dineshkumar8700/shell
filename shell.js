import { parseCommand } from "./utils/parse_command.js";
import { executeCommand } from "./utils/execute_command.js";

const main = () => {
  console.log("Welcome Back. Type --help to see available commands");
  let command = prompt("\n> ");

  while (command !== "exit") {
    const parsedCommand = parseCommand(command);
    executeCommand(parsedCommand);
    command = prompt("\n> ");
  }
};

main();
