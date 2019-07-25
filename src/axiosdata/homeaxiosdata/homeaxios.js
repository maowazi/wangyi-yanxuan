// import axiox from "axios";
import axios from "../../axios/axios";
import {JVJIA_SHENGHUO } from "../../urlapi/home/urlapi";
// axiox.get("/api/home/jvjia_shenghuo")
//     .then((res) => {
//         if (res.status === 200 && res.code === 0) {
//             let newdata = res.data.data.map(({ id, name }) => ({ id, name }))
//             console.log(newdata);
//         } else {
//             console.log("失败");
//         }
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// const homeAxiosData = () => {
//     return new Promise((reslove,reject) => {           //因为请求时异步的,所以用Promise让里面的先执行
//         axiox.get("/api/home/jvjia_shenghuo")
//             .then((res) => {
//                 if (res.status === 200 && res.data.code === 0) {
//                     let newdata = res.data.data.map(({ id, name }) => ({ id, name }))
//                     reslove(newdata);                //改变Promise状态并把值传出去
//                 } else {
//                     console.log("失败");
//                 }
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     })
// }

//下面是简写方式
const homeAxiosData = async () => {                              //让此函数成为异步的
    // let res = await axiox.get(JVJIA_SHENGHUO);       //因为axios是基于Promise的所以它也是异步的,
    //                                                             //加await目的是让此函数先执行, 
    //                                                             //因为是Promise的所以请求成功后数据会放在.then里面, 
    //                                                             //同时reslove里也会有, 所以await能接受到reslove里的数据并会返回数据
    // if (res.status === 200 && res.data.code === 0) {
    //     let newdata = res.data.data.map(({ id, name }) => ({ id, name }))
    //     return newdata;
    // } else {
    //     console.log("失败");
    // }
    let res = await axios.get(JVJIA_SHENGHUO);
    return res
}


export {
    homeAxiosData
}