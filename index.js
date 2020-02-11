const koa = require("koa")

var app = new koa()

app.use(async ctx => {
    ctx.body = "good to go"
})

app.listen(80, ()=>{
    console.log("listening on part 80")
})