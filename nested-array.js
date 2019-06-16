function panggilNestedArray(){
  var dataNama=[["01","02","03"],
                ["11","12","13"],
                ["21","22","23"]]
  console.log(dataNama.length);
  console.log(dataNama[1][2]);
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      console.log(dataNama[i][j]);
    }
  }
}

panggilNestedArray()
