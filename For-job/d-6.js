let a1 = document.getElementById("cv-1");
let a2 = document.getElementById("cv-2");
let a3 = document.getElementById("cv-3");
let a4 = document.getElementById("cv-4");
const worker = new Worker("./worker.js");

a1.addEventListener("click", () => {
  worker.postMessage("ddf");
  worker.onmessage = (e) => {
    console.log(e);
    a3.innerText = e.data;
  };
});

a2.addEventListener("click", () => {
  a4.innerText = "Hello i was clicked";
});
