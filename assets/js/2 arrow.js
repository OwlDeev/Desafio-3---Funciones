let suma = (a, b) => a + b;

//APLICACION DEL REQUERIMIENTO 1 - ESTO ES EXTRA
let validarButton2 = document.getElementById("validarButton2");
let labelSuma2 = document.getElementById("sumaTotalLabel2");

validarButton2.addEventListener("click", function () {
  let inputNumero4 = Number(document.getElementById("inputNumero4").value);
  let inputNumero5 = Number(document.getElementById("inputNumero5").value);
  labelSuma2.innerHTML =
    "El suma total es: " + suma(inputNumero4, inputNumero5);
});
