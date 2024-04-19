/** 
 * Build a Windows command file to be ran globally 
 * The cmd file will be written to .bun/bin
 */
async function buildGlobalCommand(path: string, txt: string) {
   await Bun.write(path, txt);
}

/**
 * The text to be written to the command file
 */
const cmdText = `
:: created by C:/Users/nhron/dev/Bun/Utils/Simple/installG.ts
:: serves a project configuration from project root

@bun "run" "C:/Users/nhron/dev/Bun/DevTools/DevTool-Simple/index.ts" %*
`;

/**
 * The fullpath of the file to be written
 */
const cmdFilePath = 'C:/Users/nhron/.bun/bin/serve.cmd'

// call the function
buildGlobalCommand(cmdFilePath, cmdText)