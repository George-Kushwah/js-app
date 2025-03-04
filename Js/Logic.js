let aa1 = "Rahul";
let aa2 = aa1.split("").reverse().join("");
//console.log(aa2)
let aa3 = "";
for (i = aa1.length; i--; ) {
  aa3 += aa1[i];
}
//console.log(aa3);

function Prime(val) {
  if (val == 1) return console.log("Prime Number");
  if (val == 2) return console.log("Not a Prime Number");
  else {
    for (i = 2; i < val; i++) {
      if (val % i === 0) {
        return console.log("Not Prime Number");
      }
    }
  }
  return console.log("Prime Number");
}
//Prime(6)
let hcm;
let lcm;
let aa4 = 9;
let aa5 = 8;
for (i = 0; i <= aa4 && i <= aa5; i++) {
  if (aa4 % i == 0 && aa5 % i === 0) {
    hcm = 1;
  }
  lcm = (aa4 * aa5) / hcm;
}
//console.log(lcm)

function Fab(val) {
  let a1 = 0,
    a2 = 1,
    next;
  for (i = 0; i < val; i++) {
    next = a1 + a2;
    a1 = a2;
    a2 = next;
    document.write(a1, "<br>");
  }
}
//Fab(5)

function Arm(val) {
  let num = 0;
  let temp = val;
  while (temp > 0) {
    let rem = temp % 10;
    num += rem * rem * rem;
    temp = parseInt(temp / 10);
  }
  if (num === val) {
    console.log("Number is Armstrong");
  } else console.log("Number not Armstrong");
}
//Arm(370)

function Pair(str) {
  let a1 = str.length;
  let a2 = Math.floor(a1 / 2);
  for (i = 0; i < a2; i++) {
    if (str[i] == str[a1 - 1 - i]) {
      return true;
    } else return false;
  }
}

console.log(Pair("racecar"));

function abcd() {
  let a1 = document.getElementById("pp").value;
  document.getElementById("dd").innerText = a1;
}
