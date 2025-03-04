function Recurrtion(val) {
  if (val <= 0) return val;
  else {
    return val + Recurrtion(val - 1);
  }
}
//console.log(Recurrtion(7));

function Curring(val) {
  return (b) => {
    return (a) => {
      return (c) => {
        return a + b + c + val;
      };
    };
  };
}
//console.log(Curring(10)(10)(10)(10));

//Higher Order Function

const data1 = [
  { name: "Harshit", age: 5, role: "admin" },
  { name: "Rachit", age: 3, role: "admin" },
  { name: "Spidey", age: 5, role: "admin" },
  { name: "Rahul", age: 34, role: "user" },
];

function Higher(val, fn) {
  const dd = [];
  for (let i of val) {
    if (fn(i)) {
      dd.push(i);
    }
  }
  return dd;
}

// console.log(
//   Higher(data1, function (emp) {
//     return emp.age > 3;
//   })
// );

//call,bind,apply

function student(name, sub, school) {
  this.name = name;
  this.sub = sub;
  this.school = school;
}

function Fun1(a) {
  console.log(
    `Hello my name ${this.name} and my subject is ${this.sub} and study in ${this.school} my home in ${a}`
  );
}
const a2 = new student("Harshit Kushwah", "Engligh", "All Sant School");
// Fun1.call(a2, "Agra");
// Fun1.apply(a2, ["Newyork"]);
// const a3 = Fun1.bind(a2);
// a3(["Noida"]);

//First Class function

function Fname(val) {
  return val;
}

function lname(val) {
  return val;
}

function com(a, b) {
  console.log(a, b);
}
//com(Fname("Jhon"), lname("Deo"));

function Comb1(val) {
  return function () {
    return val;
  };
}

let aa2 = Comb1("Jhon");
//console.log(aa2());
let aa3 = 10;

function impure() {
  console.log(aa3);
  aa3++;
}
// impure();
// impure();
// impure();

function Pure(val) {
  val++;
  console.log(val);
}
// Pure(10);
// Pure(10);

let aa4 = function promise(a, b) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(a + b);
    }, 2000);
  });
};
// aa4(1, 2)
//   .then((res) => aa4(res, 3))
//   .then((res) => console.log(res))
//   .catch((e) => {
//     console.log(e);
//   });

//Aync Funtion

async function Aync() {
  console.log("2");
  await console.log("3");
  console.log("4");
}
// console.log("1");
// Aync();
// console.log("5");

// async function call() {
//   let a = new Promise((res, rej) => {
//     res("Promise Resolve");
//   });
//   return a;
// }
// call().then((res) => console.log(res));

//console.log(call());

async function call1() {
  let a = new Promise((res, rej) => {
    res("Promise Resolve-1");
    //rej(new Error());
  });
  try {
    let data = await a;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
//call1();

async function call2() {
  try {
    let a = await fetch("https://jsonplaceholder.typicode.com/users");
    let a1 = await a.json();
    console.log(a1);
  } catch (e) {
    console.log(e);
  }
}
//call2();

let aa5 = new Promise((res, rej) => {
  setTimeout(() => {
    res("1-*Resolve");
  }, 200);
});

let aa6 = new Promise((res, rej) => {
  setTimeout(() => {
    res("2-*Resolve");
  }, 100);
});

let aa7 = new Promise((res, rej) => {
  setTimeout(() => {
    res("3-Resolve");
  }, 50);
});

let aa8 = new Promise((res, rej) => {
  setTimeout(() => {
    res("4-*Resolve");
    //rej(new Error());
  }, 500);
});

// Promise.all([aa5, aa6, aa7, aa8])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

// Promise.allSettled([aa5, aa6, aa7, aa8])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

// Promise.race([aa5, aa6, aa7, aa8])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

// Promise.any([aa5, aa6, aa7, aa8])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

let aa9 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Resolve");
  }, 1000);
});
// aa9
//   .finally((res1) => console.log(res1, "Finily"))
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e, "error"));
