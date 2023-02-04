
//引入express
const express = require('express');
//创建应用对象
const app = express();
//创建路由规则
app.get('/server', (request, response) =>{
  response.setHeader('Access-Control-Allow-Origin','*');
  const data = {
    name:'哈哈哈'
  };
  let str = JSON.stringify(data);
  // send 只能发送字符串类型 所以需要将对象转化为字符串形式
  response.send(str);
});
//监听端口启动服务
app.listen(8000, () =>{
  console.log("服务器已经启动， 8000端口监听中.....")
})