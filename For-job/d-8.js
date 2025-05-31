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
    for (let j = i - 1; j >= 1; j--) {
      line += j;
    }
    console.log(line);
  }
}

//printNumberPyramid(4);

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

//console.log(in1, in2, in3);

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

// const channel = new youtube();
// channel.subcribe(sub1, sub2, sub3);
// channel.publish("New Video Added");
// channel.unsubcribe(sub2);
// channel.publish("How the New Video Added");

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
