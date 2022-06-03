const http = require('http')
const fs = require('fs')
const qs = require('qs')

const server = http.createServer(((req, res) => {
    if(req.method==='GET'){
        fs.readFile('./views/register.html','utf-8',((err, data) => {
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            return res.end()
        }))
    }else{
        let data = ''
        req.on('data',chunk=>{
            data+=chunk
        })
        req.on('end',()=>{
            const dataHTML = qs.parse(data)
            fs.readFile('./views/form.html','utf-8',(((err, data1) => {
                if(err){
                    console.log(err);
                }
                data1=data1.replace('{name}',dataHTML.name)
                data1 = data1.replace('{password}',dataHTML.password)
                res.writeHead(200,{'content-type':'text/html'})
                res.write(data1)
                return res.end()
            })))
        })
    }
}))


server.listen(8000,()=>{
    console.log('server is running')
})