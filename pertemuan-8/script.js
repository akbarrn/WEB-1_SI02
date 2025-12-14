function tambah() {
  let a = Number(document.getElementById("angka1").value);
  let b = Number(document.getElementById("angka2").value);
  document.getElementById("hasil").innerHTML = "Hasil: " + (a + b);
}

function kurang() {
  let a = Number(document.getElementById("angka1").value);
  let b = Number(document.getElementById("angka2").value);
  document.getElementById("hasil").innerHTML = "Hasil: " + (a - b);
}