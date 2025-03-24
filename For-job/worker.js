onmessage = (e) => {
  console.log(e);
  let i;
  for (i = 0; i < 100; i++) {}
  postMessage(i);
};
