const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/index.php",{
        target:"http://touch.m.dangdang.com",
        changeOrigin:true,
    }))
}