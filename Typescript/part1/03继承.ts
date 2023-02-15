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
  //继承父类的属性和方法,子类可以通过创建实例，通过实例.直接调用
  // 子类也可以创建和父类相同的方法，
  //子类会覆盖与父类相同的方法,实例调用子类中的方法，并不改变父类中的方法(重写)
  run(){
    console.log(`$(this.name)在跑...`);
  }
}

const cat = new Cat('小白', 3);
cat.run();
cat.sayHello();