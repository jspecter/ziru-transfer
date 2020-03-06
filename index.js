const koa = require("koa");
const chalk = require("chalk");
const app = new koa();

app.use(async (ctx, next) => {
  console.log(ctx);
});

app.listen(5000, () => {
  console.log(chalk.green("服务器工作在：localhost:5000"));
});
