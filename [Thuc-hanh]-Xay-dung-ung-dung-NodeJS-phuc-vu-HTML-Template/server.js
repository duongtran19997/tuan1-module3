const http = require('http')
const fs = require('fs')
const qs = require('qs')

const server = http.createServer(((req, res) => {
    fs.readFile('./template/index.html','utf-8',(err, data) => {
        if(err){
            console.log(err.message);
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    })
}))
server.listen(8000,()=>{
    console.log('server is running')
})