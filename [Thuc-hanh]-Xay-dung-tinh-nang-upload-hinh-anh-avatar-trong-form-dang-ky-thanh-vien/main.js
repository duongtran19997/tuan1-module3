const http = require('http')
const fs = require('fs')
const formidable = require('formidable')

let users = [];
const server = http.createServer(((req, res) => {
    if(req.method ==='GET'){
        fs.readFile('./views/index.html','utf-8',((err, data) => {
            if(err){
                console.log(err);
            }else{
                res.writeHead(200,{'content-type':'text/html'})
                res.write(data)
    return res.end()
            }
        }))
    }else{
        //start form
        let form = new formidable.IncomingForm()
        form.uploadDir ='upload/'
        form.parse(req,(err,fields,file)=>{
            let userInfo ={
                name : fields.name,
                email : fields.email,
                password : fields.password,
            };
            if (err) {
                // Kiểm tra nếu có lỗi
                console.error(err.message);
                return res.end(err.message);
            }
            // Lấy ra đường dẫn tạm của tệp tin trên server
            let tmpPath = files.avatar.filepath;
            // Khởi tạo đường dẫn mới, mục đích để lưu file vào thư mục uploads của chúng ta
            let newPath = form.uploadDir + files.avatar.originalFilename;
            // Tạo thuộc tính avatar và gán giá trị cho nó
            userInfo.avatar = newPath;
            // Đổi tên của file tạm thành tên mới và lưu lại
            fs.rename(tmpPath, newPath, (err) => {
                if (err) throw err;
                let fileType = files.avatar.mimeType;
                let mimeTypes = ["image/jpeg", "image/jpg", "image/png"];
                if (mimeTypes.indexOf(fileType) === -1) {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    return res.end('The file is not in the correct format: png, jpeg, jpg');
                }
            });
            users.push(userInfo);
            console.log(users)
            return res.end('Register success!');
        });
        }

}))
server.listen(8000,()=>{
    console.log('server is running')
})