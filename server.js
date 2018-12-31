
import config from "./config";
import apiRouter from "./api";

import express from "express";
const server = express();

server.set("view engine", "ejs");

server.get("/", (req, res) => {
	res.render("index", {data: "MY <em>CONTENT</em>"});
});

server.use("/api", apiRouter);
server.use(express.static("public"));

server.listen(config.port, () => {
	console.info(`Listening on port ${config.port}`);
});
