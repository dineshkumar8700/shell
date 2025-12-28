import { parseCommand } from "./utils/parse_command.js";
import { executeCommand } from "./utils/execute_command.js";

const main = () => {
  console.log("Welcome Back. Type --help to see available commands");
  while (true) {
    const command = prompt("\n> ");
    const parsedCommand = parseCommand(command);
    executeCommand(parsedCommand);
  }
};

main();
