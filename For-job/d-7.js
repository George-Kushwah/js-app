let a1 = "Hello my name it Gunnu";

function Change(data, replace, newreplace) {
  const dc = data.split(replace);
  const dc1 = dc.join(newreplace);
  console.log(dc1);
}
//Change(a1, "it", "is");
