const express = require("express");
const server = express();
server.get("/api/home/jvjia_shenghuo", (req,res) => {
    res.json({
        code: 0,
        msg: "OK",
        data: require("./data/jvjia_shenghuo")
    });
})
server.get("/api/home/home_banner_swiper", (req, res) => {
    res.json({
        code: 0,
        msg: "OK",
        data: require("./data/home_banner_swiper")
    });
})
server.get("/api/home/home_xieyi", (req, res) => {
    res.json({
        code: 0,
        msg: "OK",
        data: require("./data/icon")
    });
})
server.get("/api/home/home_xinpin_chushiji", (req, res) => {
    res.json({
        code: 0,
        msg: "OK",
        data: require("./data/xinpin_chushiji")
    });
})
server.get("/api/home/home_chaozhi", (req, res) => {
    res.json({
        code: 0,
        msg: "OK",
        data: require("./data/home_chaozhi")
    });
})
server.get("/api/home/home_scrolllist", (req, res) => {
    res.json({
        code: 0,
        msg: "OK",
        data: require("./data/home_scrolllist")
    });
})
server.get("/api/home/home_qianggou", (req, res) => {
    res.json({
        code: 0,
        msg: "OK",
        data: require("./data/home_qianggou")
    });
})
server.get("/api/home/home_xinpinsoufa", (req, res) => {
    res.json({
        code: 0,
        msg: "OK",
        data: require("./data/home_xinpinsoufa")
    });
})
server.get("/api/home/home_renqituijian", (req, res) => {
    res.json({
        code: 0,
        msg: "OK",
        data: require("./data/home_renqituijian")
    });
})
server.listen(8888, (err) => {
    if (err) {
        console.log("服务启动失败");
    } else {
        console.log("服务启动成功");
    }
})