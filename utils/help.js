import { internalCommands } from "../commands/internal_commands.js";
import { externalCommands } from "../commands/external_commands.js";

export const help = () => {
  console.log("Welcome back. Here are the available commands");

  console.log("Internal Commands", Object.keys(internalCommands));
  console.log("External Commands", Object.keys(externalCommands));
};
