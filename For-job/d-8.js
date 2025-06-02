function foo1() {
  return new Promise((res, rej) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res1) => {
        if (res1.ok) {
          return res1.json();
        } else Promise.reject(res);
      })
      .then((res2) => res(res2))
      .catch((e) => rej(e));
  });
}
//console.log(foo1());

function printStarPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = `*`.repeat(2 * i - 1);
    //  let stars = `${i}`.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

//printStarPyramid(7);
function printNumberPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    line += " ".repeat(rows - i);
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    for (let k = i - 1; k >= 1; k--) {
      line += k;
    }
    console.log(line);
  }
}

// printNumberPyramid(4);

// Singleton

const singleton = (function () {
  let instan = null;
  function createInstance() {
    return { name: "Rachit", age: 4, score: Math.floor(Math.random() * 80) };
  }
  return {
    getinstance: function () {
      if (!instan) {
        instan = createInstance();
      }
      return instan;
    },
  };
})();
const in1 = singleton.getinstance();
const in2 = singleton.getinstance();
const in3 = singleton.getinstance();

// console.log(in1, in2, in3);

//Observer pattern

class youtube {
  data = [];
  subcribe(...sub) {
    for (let i = 0; i < sub.length; i++) {
      this.data.push(sub[i]);
    }
  }
  unsubcribe(sub) {
    this.data = this.data.filter((item) => item.id !== sub.id);
  }
  publish(msg) {
    for (let subs of this.data) {
      subs.notify(msg);
    }
  }
}

class subscriber {
  constructor(id, name) {
    (this.id = id), (this.name = name);
  }
  notify(msg) {
    console.log(`Hello ${this.name} : ${msg}`);
  }
}

const sub1 = new subscriber(1, "Raj");
const sub2 = new subscriber(2, "Mohit");
const sub3 = new subscriber(3, "Jhon");

const channel = new youtube();
// channel.subcribe(sub1, sub2, sub3);
// channel.publish("New Video Added");
// channel.unsubcribe(sub2);
// channel.publish("Hows the New Video Added");

//Factory pattern

class fult {
  salry = 10000;
}
class partt {
  salry = 5000;
}
class cont {
  salry = 7000;
}
class freet {
  salry = 4000;
}

class empfactory {
  emp = null;
  createEmplo(type) {
    switch (type) {
      case "full":
        this.emp = new fult();
        break;
      case "part":
        this.emp = new partt();
        break;
      case "con":
        this.emp = new cont();
        break;
      case "free":
        this.emp = new freet();
        break;
      default:
        break;
    }
    this.emp.type = type;
    return this.emp;
  }
}

const empfac = new empfactory();
const fulltime = empfac.createEmplo("full");
const contruct = empfac.createEmplo("con");
//console.log(fulltime, contruct);

//prototype pattern

function cars(car, model) {
  this.wheel = car;
  this.engine = model;
  this.disp = function () {
    console.log(`car ${this.wheel} model ${this.engine}`);
  };
}

const car1 = new cars("Toyota", "Innova");
const car2 = new cars("Maruti", "Alto");
// car1.disp();
// car2.disp();

//Classes and Objects

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice", 30);
//person1.greet();

//Encapsulation

class Counter {
  count = 0; // private field

  increment() {
    this.count++;
    console.log(this.count);
  }
}

const c = new Counter();
//c.increment(); // 1

//Inheritance

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // calls parent method
    console.log("Dog barks");
  }
}

const d = new Dog();
//d.speak();

//Polymorphism

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const shape = new Circle(5);
//console.log(shape.area());

//Abstraction

class Database {
  connect() {
    throw new Error("Method 'connect()' must be implemented.");
  }
}

class MySQL extends Database {
  connect() {
    console.log("Connected to MySQL");
  }
}

const db = new MySQL();
//db.connect();

//Facade Pattern

class CPU {
  start() {
    console.log("CPU started");
  }
}

class Memory {
  load() {
    console.log("Memory loaded");
  }
}

class HardDrive {
  read() {
    console.log("Reading from hard drive");
  }
}

class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  startComputer() {
    this.cpu.start();
    this.memory.load();
    this.hardDrive.read();
  }
}

// Decorator Pattern
const myPC = new ComputerFacade();
myPC.startComputer();

function coffee() {
  return "Coffee";
}

function withMilk(drink) {
  return function () {
    return drink() + " + Milk";
  };
}

function withSugar(drink) {
  return function () {
    return drink() + " + Sugar";
  };
}

const myCoffee = withSugar(withMilk(coffee));
console.log(myCoffee());

// Proxy Pattern

class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }

  loadFromDisk() {
    console.log(`Loading ${this.filename}`);
  }

  display() {
    console.log(`Displaying ${this.filename}`);
  }
}

class ProxyImage {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Usage
const img = new ProxyImage("photo.jpg");
img.display(); // Loads and displays
img.display(); // Just displays (already loaded)
