const koa = require("koa")

var app = new koa()

app.use(async ctx => {
    ctx.body = "good to go"
})