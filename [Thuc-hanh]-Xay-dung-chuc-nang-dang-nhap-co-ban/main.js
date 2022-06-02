const http = require('http')
let server = http.createServer(((req, res) => {
    let txt = ''
    if(req.url === '/login'){
        txt = "Login success";
    }else{
        txt ='login fail'
    }
    res.end(txt)
}))
server.listen(8080,'localhost')