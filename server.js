const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json','.png':'image/png','.jpg':'image/jpeg'};
const server = http.createServer((req,res)=>{
  const url = new URL(req.url, 'http://localhost');
  let pathname = decodeURIComponent(url.pathname);
  let file = path.join(root, pathname.replace(/^\/+/, ''));
  if (pathname === '/' || !path.extname(pathname)) file = path.join(root,'index.html');
  if (!file.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file,(err,data)=>{
    if(err){res.writeHead(404,{'Content-Type':'text/plain'});return res.end('Not found');}
    res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});
    res.end(data);
  });
});
const port = Number(process.env.PORT)||4173;
server.listen(port,()=>console.log(`MELTLINE running at http://localhost:${port}`));