const http = require("http");
const url = require("url");
const chalk = require("chalk");

const listener = function(req, res) {
  const { url } = req;
  res.end(url);
};

const server = http.createServer(listener);

server.listen(5000, "localhost", () => {
  console.log(chalk.green("服务器工作在：http://localhost:5000"));
});
