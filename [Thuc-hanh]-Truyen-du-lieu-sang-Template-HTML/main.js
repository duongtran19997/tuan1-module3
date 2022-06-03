const http = require('http')
const qs = require('qs')
const fs = require('fs')
const server = http.createServer(((req, res) => {
    fs.readFile('./views/index.html','utf-8',((err, data) => {
        if(err){
            console.log(err);
        }else{
            // Thực hiện replace nội dung
            let username = "Admin";
           data = data.replace('{username}', username)
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            return res.end()
        }
    }))
}))

server.listen(8000,()=>{
    console.log('server is running')
})