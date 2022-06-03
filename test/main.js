const http = require('http')
const fs = require('fs')
const qs = require('qs')

const server = http.createServer(((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/calculator.html', 'utf-8', ((err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
          return   res.end()
        }))
    } else {
        let result = 0;
        let data = '';
        req.on('data', chunk => {
            data += chunk
            console.log('lon')
        })
        req.on('end', () => {
            const dataHTML = qs.parse(data)
            fs.readFile('./views/calculator.html', 'utf8', ((err, data1) => {
                if (err) {
                    console.log(err.message);
                }
                switch (dataHTML.select) {
                    case '+':
                        result = dataHTML.num1 * 1 + dataHTML.num2 * 1
                        break
                    case '-':
                        result = dataHTML.num1 * 1 - dataHTML.num2 * 1
                        break
                    case '*':
                        result = (dataHTML.num1 * 1) * (dataHTML.num2 * 1)
                        break
                    case '/':
                        result = (dataHTML.num1 * 1) / (dataHTML.num2 * 1)
                        break
                }

            }))
            fs.readFile('./views/calculator.html', 'utf8', ((err, data1) => {
                if (err) {
                    console.log(err);
                } else {
                    data1 = data1.replace('{result}', result)
                    res.write(data1)
                    return res.end()
                }
            }))
        })
    }
}))
server.listen(8000, () => {
    console.log('server is running')
})