const http = require('http')
const fs = require('fs')
const qs = require('qs')

const server = http.createServer(((req, res) => {
    if(req.method ==='GET'){
        fs.readFile('./views/todo.html','utf8',((err, data) => {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data)
            return res.end()
        }))
    }else{
        let data = ''
        req.on("data",chunk => {
            data+=chunk
        })
        req.on('end',()=>{
            const thisNote=qs.parse(data)
            fs.readFile('./views/display.html','utf8',((err, data1) => {
                if(err){
                    console.log(err.message);
                }
                data1 = data1.replace('{job}',thisNote.job)
                data1 = data1.replace('{time}',thisNote.time)
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data1);
                return res.end();
            }))
        })
        req.on('error', () => {
            console.log('error')})
    }
}))
server.listen(8080,()=>{
    console.log('server running at 8080 localhost')
})