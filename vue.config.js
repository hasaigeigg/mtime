const path = require("path");

module.exports = {
    devServer:{
        proxy:{
            "/Service":{
                target:"https://m.mtime.cn",
                changeOrigin:true
            },
            "/article":{
                target:"https://content-api-m.mtime.cn",
                changeOrigin:true
            },
            "/api":{
                target:"https://ticket-m.mtime.cn",
                changeOrigin:true
            },
            "/discovery":{
                target:"https://ticket-api-m.mtime.cn",
                changeOrigin:true
            },
            "/cinema":{
                target:"https://ticket-api-m.mtime.cn"
            }
            
        }   
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@router":path.join(__dirname,"./src/router"),
            }
        }
    }
}