const http = require('http')
const fs = require('fs')
const qs = require('qs')
let users = []
const server = http.createServer(((req, res) => {
    if(req.method==='GET'){
        fs.readFile('./views/index.html',((err, data) => {
            if(err){
                console.log(err.message);
                res.writeHead(400,{'content-type':'text/html'})
                res.write('404 not found')
                return res.end()
            }else{
                res.writeHead(200,{'content-type':'text/html'})
                res.write(data)
                return res.end()
            }
        }))
    }
    let data =''
    req.on('data',chunk=>{
        data += chunk})
    req.on('end',()=>{

        fs.readFile('./views/index.html','utf-8',((err, data1) => {
            if(err){
                console.log(err.message);
            }else{
                let dataHTML = qs.parse(data)
                users.push(dataHTML)
                console.log(users);
                data1 = data1.replace('{name}',dataHTML.name)
                data1 = data1.replace('{email}',dataHTML.email)
                res.writeHead(200,{'content-type':'text/html'})
                res.write(data1)
                return res.end()
            }
        }))
    })
    }))
server.listen(8000,()=>{
    console.log('server is run')
})