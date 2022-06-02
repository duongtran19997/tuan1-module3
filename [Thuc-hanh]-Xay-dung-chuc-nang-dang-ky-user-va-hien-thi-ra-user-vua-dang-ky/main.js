const http = require('http')
const fs = require('fs')
const qs = require('qs')
const server = http.createServer(((req, res) => {
        if(req.method==='GET'){
            fs.readFile('./view/resgister.html',((err, data) => {
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data);
                return res.end()
            }))
        }else{
            let data = ''
            req.on("data", chunk => {
                data+=chunk
            })
            req.on("end", ()=>{
                const userInfo =  qs.parse(data)
                console.log(userInfo);
                fs.readFile('./view/index.html',"utf-8",(err,data1)=>{
                    if(err){
                        console.log(err);
                    }
                    data1 = data1.replace('{name}',userInfo.name)
                    data1 = data1.replace('{email}',userInfo.email)
                    data1 = data1.replace('{pass}',userInfo.pass)
                    res.writeHead(200,'utf-8',{'content-type':'text/html'})
                    res.write(data1)
                    res.end()
                })
            })
            req.on('error',()=>{
                console.log('error')
            })
        }
}))
server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
});