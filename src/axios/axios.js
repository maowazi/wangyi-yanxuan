import axios from "axios";
class Axios {
    constructor() {
        
    }
    get(url) {
        return new Promise((reslove, reject) => {
            axios.get(url)
                .then((res) => {
                    if (res.status === 200 && res.data.code === 0) {
                        let newdata = res.data.data.map((item) => {
                            return {
                                id: item.id,
                                name:item.name
                            }
                        })
                        reslove(newdata)
                    } else {
                        console.log("失败");
                    }
                })
                .catch((err) => {
                    console.log(err)
                })

            
        })
        
    }
}
const axiox = new Axios();
export default axiox;