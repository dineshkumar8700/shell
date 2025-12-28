import { internalCommands } from "../commands/internal_commands.js";
import { externalCommands } from "../commands/external_commands.js";
import { help } from "./help.js";

export const executeCommand = (command) => {
  let { cmd, args } = command;
  cmd = cmd.toLowerCase();

  if (cmd === "--help") return help();
  if (internalCommands[cmd]) {
    return internalCommands[cmd](args);
  }
  if (externalCommands[cmd]) {
    return externalCommands[cmd](args);
  }

  console.log("Command not found:", cmd);
};
