const http = require('http')
const qs = require('qs')
const fs = require('fs')

const server = http.createServer(((req, res) =>{
    if(req.method ==='GET'){
        fs.readFile('./views/calculator.html',((err, data) => {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
           return  res.end()
        }))
    }else{
        let result = 0;
        let data = '';
        req.on('data',chunk => {
            data += chunk
        })
        req.on('end',()=>{
            const thisData = qs.parse(data);
            fs.readFile('./views/display.html','utf-8',((err, data1) => {
                if(err){
                    console.log(err);
                }

                switch (thisData.select) {
                   case '+':
                       result = (+thisData.num1)+ (thisData.num2*1)
                        break
                   case '-':
                       result = (+thisData.num1)- (thisData.num2*1)
                        break
                    case '*':  result = (+thisData.num1)* (thisData.num2*1)
                        break
                    case '/': result = (+thisData.num1)/ (thisData.num2*1)
                        break
               }
            }))
            fs.readFile('./views/display.html','utf-8',(err,data1)=>{
                if(err){
                    console.log(err);
                }
                data1=data1.replace('{result}',result)
                res.write(data1)
                return res.end()
            })
        })
    }
} ))
server.listen(8080,()=>{
    console.log('server is running')
})