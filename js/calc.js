let matrizes = {};
let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let r3 = document.getElementById("r3");
let r4 = document.getElementById("r4");

function mult() {
  matrizes = {
    a1: document.getElementById("a1").value,
    a2: document.getElementById("a2").value,
    a3: document.getElementById("a3").value,
    a4: document.getElementById("a4").value,
    b1: document.getElementById("b1").value,
    b2: document.getElementById("b2").value,
    b3: document.getElementById("b3").value,
    b4: document.getElementById("b4").value,
  };
  console.log(matrizes);
  r1.value = matrizes.a1 * matrizes.b1 + matrizes.a2 * matrizes.b3;
  r2.value = matrizes.a1 * matrizes.b2 + matrizes.a2 * matrizes.b4;
  r3.value = matrizes.a3 * matrizes.b1 + matrizes.a4 * matrizes.b3;
  r4.value = matrizes.a3 * matrizes.b2 + matrizes.a4 * matrizes.b4;
}
function sub() {
  matrizes = {
    a1: document.getElementById("a1").value,
    a2: document.getElementById("a2").value,
    a3: document.getElementById("a3").value,
    a4: document.getElementById("a4").value,
    b1: document.getElementById("b1").value,
    b2: document.getElementById("b2").value,
    b3: document.getElementById("b3").value,
    b4: document.getElementById("b4").value,
  };
  console.log(matrizes);
  r1.value = matrizes.a1 - matrizes.b1;
  r2.value = matrizes.a2 - matrizes.b2;
  r3.value = matrizes.a3 - matrizes.b3;
  r4.value = matrizes.a4 - matrizes.b4;
}
function soma() {
  matrizes = {
    a1: document.getElementById("a1").value,
    a2: document.getElementById("a2").value,
    a3: document.getElementById("a3").value,
    a4: document.getElementById("a4").value,
    b1: document.getElementById("b1").value,
    b2: document.getElementById("b2").value,
    b3: document.getElementById("b3").value,
    b4: document.getElementById("b4").value,
  };
  console.log(matrizes);
  r1.value = +matrizes.a1 + +matrizes.b1;
  r2.value = +matrizes.a2 + +matrizes.b2;
  r3.value = +matrizes.a3 + +matrizes.b3;
  r4.value = +matrizes.a4 + +matrizes.b4;
}
