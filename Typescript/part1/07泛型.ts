/**
 * 
 *   在类型不明确的时候可以使用泛型
 */

 function fn1<T>(a: T): T {
  return a;
}

fn1(123);

let result = fn1(10); //不指定泛型
let result1 = fn1<string>('hello'); //指定泛型

//多个泛型
function fn2<A, B>(x: A, y: B):A{
  return x;
}

fn2('123',123);

interface Inter{
  length: number;
}

function fn3<X extends Inter>(w: X): number{
  return w.length;
}

fn3({length:123});

class Mycalss<T>{
  constructor(public name: T){}
}

const mc = new Mycalss<string>('hahaha')