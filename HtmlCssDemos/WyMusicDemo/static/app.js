//导入http模块
const http=require('http');
//导入文件路径模块
const url=require('url');
const path=require('path');
//导入文件模块
const fs=require('fs');
const imie=require('mime');

const app=http.createServer();

app.on('request',(req,res)=>{
  //获取用户的 请求路径
    let pathname=url.parse(req.url).pathname;
  
    //将用户的请求路径转换为实际的服务器硬盘路径
    let realPath=path.join(__dirname,'public'+pathname);
   
    fs.readFile(realPath,(error,result)=>{
        if(error!=null){
            res.writeHead(404,{
                'content-type':'text/html;charset=utf8'
            })
            res.end('文件读取失败');
        }
    res.end(result);
    });
});
app.listen(3001);
console.log('服务器已启动');