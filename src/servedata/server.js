const express = require("express");
const server = express();
server.get("/api/home/jvjia_shenghuo", (req,res) => {
    res.json({
        code: 0,
        msg: "OK",
        data: require("./data/jvjia_shenghuo")
    });
})
server.listen(8888, (err) => {
    if (err) {
        console.log("服务启动失败");
    } else {
        console.log("服务启动成功");
    }
})