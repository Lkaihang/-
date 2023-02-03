# 1.  通过AJAX可以在浏览器中向服务器发送异步请求，最大的优势：无刷新获取数据，就是异步的JS和XML
#     通过请求发送到服务器，然后校验结果返回呈现，通过懒加载的形式

# 2.  XML简介:
#     被设计用来传输和存储数据， HTML用来呈现数据 在HTML中都是预定义标签,在XML中自定义标签，用来记录数据
#     现在已经被json取代

# 3.  AJAX的特点
#     优点:
#     可以无刷新页面与服务器端进行通信
#     允许你根据用户事件来更新部分页面内容
#     缺点:
#     没有浏览历史，不能回退
#     存在跨域问题（同源）
#     SEO（搜索引擎优化）不友好

# 4.  HTTP协议
#     超文本传输协议， 协议详细规定了浏览器和万维网服务器之间互相通信的规则。

#     请求报文
# 重点是格式与参数  
行 GET / URL HTTP/1.1
头 Host:atguigu.com
   Cookie: name=guigu 
空行
体 get请求为空  post不为空
#     响应报文

行  HTTP/1.1 200 ok
头  Content-Type：text、html；charset=utf-8

空行
体 <html>
     <head>
     </head>
     <body>
     </body>
   </html>
