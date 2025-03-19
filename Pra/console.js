// console.log(true ?? "Hello");
// console.log(false ?? "Hello");
// console.log(null ?? "nullHello");
// console.log(0 || "0Hello");
// console.log(undefined || "unHello");
// console.log(Math.floor(Math.random() * 9) + 1);
// console.log(true || "hello");
// console.log(false || "hello");
// console.log(true ?? "Hello");
// console.log(true && "hello");
let a29 = 100;
// console.log(a29.toString())
// console.log(100.toString())
// console.log("8" > "47"); //convert string to string
// console.log("8" > 999); // convert strint and number
// console.log("" > -1); // empty is 0
// console.log("a" > 999); //
// console.log(1000000 === 10_000_00);
// console.log(0.1 + 0.2);
// console.log(0.2 + 0.1);
// console.log(false == []); //empty array converted into string or empty strin 0 and false value =0
// console.log(false == ![]); //![] == truthy value
// console.log("hello" == {});
// console.log("apple" > []);
// console.log("aaa" > {});
// console.log("bbb" > []);
// console.log("aa" + {});
// console.log("dd" + []);
// console.log("111" - 1);
// console.log([] + 1);
// console.log({} + 2);
// console.log([1, 2, 3] > 1);
// console.log(NaN === NaN);
// console.log({} + []);
// console.log(true + 1);
// console.log(true > "");
// console.log(1 < 1);
// console.log(undefined++);
// console.log([1, 5, 5] + [2, 3]); // convert array in string
//call method automatic convert string,number to object
// console.log(10++)
// console.log(++10)
// console.log(![]);
// console.log(!{});
// console.log([1, 2, 3, 4] + 1);
// console.log([] + []);
// console.log("rr" + false);
// console.log({} + {});
// console.log((5 && 9) || 4 || 3);
// console.log(null && undefined);
// console.log(null || (2 && 5) || 9);
// console.log("good" > "bad");
// console.log(undefined ?? null);
// console.log(1 > 1);
// console.log("uat" > 2);
// console.log("bat" > 1);
// console.log("9" > 11);
// console.log(Math.round(5.51));
// console.log(Math.round(-5.51));
// console.log(Math.floor(5.51));
// console.log(Math.floor(-5.51));
// console.log(Math.abs(5.51));
// console.log(Math.abs(-5.51));
// console.log((125.216).toFixed(2));
// console.log(true + "5");
// console.log(-0 == 0);
// console.log(-0 === 0);
// console.log(true == false);
// console.log(false == true);
// console.log(null == null); //true
// console.log(null == undefined); //true
// console.log(null != undefined); //false
// console.log(undefined + undefined); //nan
// console.log(undefined === undefined);
// console.log(null + null); //0
// console.log(null + "abcd"); //nullabcd
// console.log(["eval", "p"] + 10);
// console.log(3 > "rich" < 1);
// console.log(4 < "good" > 6);
// console.log(null == undefined); //true
// console.log(null === undefined); //false
// console.log(30 + undefined); //nan
// console.log(30 + null); //
// console.log("ancd" + undefined); //abcdunde
// console.log("ancd" + null); //abdnull
// console.log(isNaN({}));
// console.log(isNaN(new Date()));
// console.log(isNaN(Date()));
// console.log("good" > "zzzz");
// console.log("15" < 5);
// console.log(Object.is(NaN, NaN));
// console.log(NaN === null);

// function animal() {
//   animal.prototype.home = () => {
//     console.log("Hello");
//   };
// }
// function Bird() {
//   Bird.prototype = Object.create(animal.prototype);
// }

// let aa = new Bird();
// aa.home();
// console.log(NaN + null);
// console.log(null + null);
// console.log("8" > "12555");
let a = ["sun", "mon", "tue", "wed", "thus"];
a.splice(2);
// console.log(a);
let a34 = 12;
let s28 = "Rahul";
// console.log(a34 ** 3);
// console.log(s28.substring(5, 1)); // its swap a value
// console.log(s28.substr(0, 2));
let s38 = ["one", "two"];
let s39 = "hello";
// console.log(s38.includes("on"));
// console.log(s39.includes("ll"));
let s42 = 1;
let s43 = 2;
// console.log(s42++ + ++s43);
// console.log("A" - 1);
// console.log("sd" + +"fv" - 2);
// console.log(!!"false" == !!"true");
// console.log(false || null || "helslo");
// console.log(false && null && "hello");
// console.log(..."Hello");
// console.log(2 + +"2");
// console.log("2" - 2 + 2);
// console.log("2" - 5);
// function foop1() {
//   var a = "Hi";
//   let b = "Hello";
//   if (true) {
//     var a = "Hi-1";
//     var b = "Hello-1"; //illegal shadow
//     console.log(a, b);
//   }
// }
// foop1();
// console.log(2 + "a" - 2);
// console.log(NaN + "n" - 2);
// console.log(false == "0");
// console.log("a" - "b" + 2);
// console.log(NaN + 555);
// console.log(1 + -"1" + "2");
// console.log(2 - -"6");
// let za1 = "abcabac".split("");
// let za2 = {};
// za1.forEach((i) => {
//   za2[i] = (za2[i] || 0) + 1;
// });
// console.log(za2);
// console.log(2 - -6);
// let za3 = { valueOf: () => 2 };
// console.log(za3);
// console.log(za3 == 2);
// console.log(za3 + 2);
// console.log(za3 > 1);
//console.log([1, 2][2]);
//console.log([2, 3, 4, 5][0]);
let za4 = [10, 20, 30];
// console.log(za4[1]);
// console.log(za4["1"]);
// console.log(za4["01"]);
var za5 = 2,
  y = (z = typeof y);
// console.log(y);
var za6 = 10;
function foo23() {
  if (za6 > 5) {
    var za6 = 2;
    console.log(za6);
  }
  console.log(za6);
}
//foo23();
let za7 = 5;
let za8 = 10;
[a1, b1] = [za7, za8];
let cd1 = document.getElementById("getId");
cd1.addEventListener("click", (e) => {
  //let ac = e.target.innerHTML;
  let ac = e.target.className;
  let ac1 = ac.split(" ");
  if (ac1.length === 1) {
    e.target.classList.add("cl");
    console.log("single click");
  } else {
    console.log("Double click");
    e.target.classList.remove("cl");
  }
});
// console.log(false || true || "hello");
// console.log(false && "hello");
//console.log([...Array(10)].map((item) => item));
// console.log(true && "Hello");
// console.log(undefined && null);
let as1 = { a: { b: { c: { name: "Gunnu" } } } };
function abac(obj) {
  for (i in obj) {
    if (typeof obj[i] === "object") {
      abac(obj[i]);
    } else {
      console.log(i, obj[i]);
    }
  }
}
// abac(as1);
