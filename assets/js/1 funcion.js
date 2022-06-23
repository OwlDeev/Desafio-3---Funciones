//REQUERIMIENTO 1
let example = function (a, b, c) {
  return a + b + c;
};

//APLICACION DEL REQUERIMIENTO 1 - ESTO ES EXTRA
let validarButton1 = document.getElementById("validarButton1");
let labelSuma = document.getElementById("sumaTotalLabel");

validarButton1.addEventListener("click", function () {
  let inputNumero1 = Number(document.getElementById("inputNumero1").value);
  let inputNumero2 = Number(document.getElementById("inputNumero2").value);
  let inputNumero3 = Number(document.getElementById("inputNumero3").value);
  labelSuma.innerHTML =
    "El sumatotal es: " + example(inputNumero1, inputNumero2, inputNumero3);
});
