// 通过static 创建的类只能被用来继承，不能创建实例
// 通过static创建的方法，不能有方法体

// static sayHello(): void;

//接口中所有的属性都不能有实际的值
//接口只能定义对象的结构，而不是考虑实际值
// 在接口中的所有方法都是抽象方法

interface myInter {
  name: string;

  say(): void;
}

//定义类的时候，可以使类去实现一个接口
// 实现接口，就需要满足接口的要求
class MyClass implements myInter {
  name: string;
  constructor(name: string){
    this.name = name;
  }

  say() {
    console.log("hello！")
  }
}
