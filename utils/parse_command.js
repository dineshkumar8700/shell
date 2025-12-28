export const parseCommand = (command) => {
  const [cmd, ...args] = command.trim().split(" ");
  return args.length === 0 ? { cmd } : { cmd, args };
};
