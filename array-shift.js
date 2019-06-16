function panggilShift() {
  var kota=['jakarta','bandung','malang','surabaya','makassar'];
  console.log(kota);
  console.log("=================");
  //kota=kota.shift();

  var kota1=kota.shift()
  console.log(kota1)

  return kota
}

console.log(panggilShift());
