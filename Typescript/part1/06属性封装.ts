(function(){
  class Anmals{
    /**
     * 
     *  public 修饰的属性可以在任意位置访问(修改), 默认
     *  private 私有属性，私有属性只能在类内部访问
     *          通过在类中添加方法使得私有属性可以被外部访问
     *  protected 受保护的属性，只能在当前类和当前类的子类中进行访问
     */
    // name: string;
    // private _age: number;
  
    // constructor(name: string, age: number){
    //   this.name = name;
    //   this._age = age;
    // }
    //以上代码也可以修改为以下代码  一个语法糖
    constructor(public name: string, private _age: number){}

    // getAge(){
    //   return this.age;
    // }

    // setAge(value: number){
    //   this.age = value;
    // }
    //以上getter setter代码等同于以下代码 get set 
    get age(){
      return this._age;
    }

    set age(value: number){
      this._age = value;
    }

    sayHello(){
      console.log('动物在叫~');
    }
  }
})();