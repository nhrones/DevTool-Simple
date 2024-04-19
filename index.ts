import { openWebsite } from 'Browser'  //'./deps.ts'
//@ts-ignore
import { join } from 'bun:path';

import {DEV, folder, port} from './config.ts';
// create our http server
const server = Bun.serve({
   port: port,
   async fetch(req) {
      let path = new URL(req.url).pathname;
      // respond with html
      const thisPath = (path === '/') ? `/index.html` : path;
      //determin the requested full-path
      const filePath = join(process.cwd(), folder, thisPath);
      if (DEV) console.log(`Serving ${thisPath}`)
      const file = Bun.file(filePath);
      const resp = new Response(file);
      resp.headers.append("Cache-Control", "no-store"),
      resp.headers.append("Access-Control-Allow-Origin", "*")
      return resp;
   }
})
console.log(`running at http://localhost:${port}`)
openWebsite(`http://localhost:${port}`)