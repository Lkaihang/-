
class Person {
  //需要创建实例，才可以对该属性进行调用，修改
  name: string = '小明';
  age : number = 22;
  //前面加static静态属性，方法函数 只能通过Person.xx进行调用和修改
  static name1: string = 'hahaha';


  sayHello(){
    console.log('你好');
  }

  static run(){
    console.log('我可以跑');
  }
}

const per = new Person();

console.log(per.age);
console.log(per.name);