(function () {
  class Anmals{
    name: string;
    age: number;
  
    constructor(name: string, age: number){
      this.name = name;
      this.age = age;
    }
  
    sayHello(){
      console.log('动物在叫~');
    }
  }
  
  class Cat extends Anmals {
    weight: number;
    constructor(name: string, age: number, weight: number){
      //重写 在子类构造函数中必须对父类构造函数进行调用
      super(name, age);// 调用父类构造函数
      this.weight = weight;
    }


    //继承父类的属性和方法,子类可以通过创建实例，通过实例.直接调用
    // 子类也可以创建和父类相同的方法，
    //子类会覆盖与父类相同的方法,实例调用子类中的方法，并不改变父类中的方法(重写)
    run(){
      console.log(`$(this.name)在跑...`);
    }

    sayHello() {
      // 在类的方法中， super就表示当前类的父类
      // super.sayHello();
      console.log(`$(this.name)在叫...`)
    }
  }
  
  const cat = new Cat('小白', 3, 10);
  cat.run();
  cat.sayHello();
})();
