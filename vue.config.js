module.exports = {
    devServer: {
        proxy: {
            "/data": {                            /**此处是要代理跨域的域名后面的 */
                target: "http://localhost:3000",    /**需要代理的域名 */
                changeOrigin: true                 /**是否允许跨域 */
            },
            "/list": {
                target: "http://localhost:3000",
                changeOrigin:true
            },
            "/api": {
                target:"http://localhost:8888"
            }
        }
    }
}
//此文件要写在项目根目录下