# const fs = require('fs')
// util 可以将方法封装为promise函数
# const util = require('util')
# const readFile = util.promisify(fs.readFile)

// async 函数是使用async关键字声明的函数。async 函数是 AsyncFunction 构造函数的实例，并且其中允许使用 await 关键字。async 和 await 关键字让我们可以用一种更简洁的方式写出基于 Promise 的异步行为，而无需刻意地链式调用 promise。await表达式的返回值是promise解决值,异常捕获用try catch
# async main() => {
#   let data1 = await reaFile('./1.html');
#   let data2 = await reaFile('./2.html');
#   let data3 = await reaFile('./3.html'); 
#   console.log(data1 + data2 + data3);  
# }

# main();