// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("./db.json");
// const middlewares = jsonServer.defaults({
// 	static: "./build",
// });

// const port = process.env.PORT || 5000;
// server.use(middlewares);
// server.use(
// 	jsonServer.rewriter({
// 		"/api/*": "/$1",
// 	})
// );

// server.use(router);
// server.listen(port, () => {
// 	console.log(`Server is running on ${port}`);
// });

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log("JSON Server is running");
});
