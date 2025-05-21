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
