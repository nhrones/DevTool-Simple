# Simple Dev Server
A Simple Bun-Server with custom configuration per project.
Entering **_serve_** in the root of a project will serve any index.html in the configured target folder.  
On start, the server will auto-launch the default browser with the index.html from `http://localhost:${config.port}`  

When first run, the util will auto-create a dev.json in the ./.vscode folder.
```ts
{
    "simple": {
        "DEV": true,
        "Port": 80,
        "Serve": "/dist"
    }
}
```
This configuration has the following config properties:

  - DEV -- a boolean that can be set true or false to be used typically for console logging during development. i.e.:
```ts
   if (DEV) console.log('in dev')
```
  - Port -- the number of the port to use - defaults to `80`    

  - Serve -- the folder to serve the index.html from; example `""`, `"/dist"`, `"public"`   


This configuration - `./.vscode/dev.json`, can be edited at any time. The`serve` command will use any new config properties on next use.