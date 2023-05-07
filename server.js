const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router('./src/assets/data/products.json');
const middlewares = jsonServer.defaults();
server.get("/favicon.ico", (req, res) => {
res.status("200").sendFile(path(__dirname + "/favicon.ico")) 
});
const port = 8000;
server.use(middlewares);
server.use(router);
server.listen(port);