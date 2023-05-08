const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router('./src/assets/data/products.json');
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
server.listen(8000, () => {
    console.log(`Json Server is running `);
})