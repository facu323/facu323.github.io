var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var condicion = true;
var seguimiento = () => {
  if (condicion) {
    document
      .querySelector(".menu")
      .setAttribute("style", "top:85px; transition: top .5s");
  } else {
    document
      .querySelector(".menu")
      .setAttribute("style", "top: 30px; transition: top .5s");
  }
};
var menus = () => {
  if (contador3 === 1) {
    seguimiento();
  }
};
function menu() {
  if (contador1 === 0) {
    contador3 = 1;
    seguimiento();
    document
      .querySelector(".fa-chevron-up")
      .setAttribute("style", "color:#0000;");
    document
      .querySelector(".fa-chevron-down")
      .setAttribute("style", "color:#000;");
    contador1++;
  } else {
    document.querySelector(".menu").removeAttribute("style");
    document.querySelector(".fa-chevron-up").removeAttribute("style");
    document.querySelector(".fa-chevron-down").removeAttribute("style");
    contador1 = 0;
    contador3 = 0;
  }
}
function menuMobile(e) {
  if (contador2 === 0) {
    document
      .getElementById("bars")
      .setAttribute("style", "background: #969696;");
    setTimeout(borrar, 250);
    document.querySelector(".responsive").setAttribute("style", "left: 0;");
    contador2++;
  } else if (e === 1) {
    document
      .getElementById("close")
      .setAttribute("style", "background: #969696; color: #f00;");
    setTimeout(borrar, 250);
    document.querySelector(".responsive").removeAttribute("style");
    contador2 = 0;
    e = 0;
  }
  function borrar() {
    document.getElementById("bars").removeAttribute("style");
    document.getElementById("close").removeAttribute("style");
  }
}
document.querySelector("#bars").addEventListener("click", menuMobile);
document.querySelector(".tapar").addEventListener("click", menu);
var hola = "";
var ends = false;
function scroll() {
  var hala = hola;
  hola = window.scrollY;
  if (hola > hala || ends) {
    condicion = false;
    menus();
    document.querySelector(".tapar").style = "top: 0";
    document.querySelector("header").style = "top: -55px";
    document.querySelector(".header-2").style =
      "top: -55px; transition: top .5s";
    document.querySelector("#bars").style =
      "top: -27.5px; transition: top .5s;";
    ends = false;
  } else if (hola < hala) {
    condicion = true;
    menus();
    document.querySelector(".tapar").style = "top: 55px;";
    document.querySelector("header").style = "top: 0";
    document.querySelector(".header-2").style = "top: 0; transition: top .5s";
    document.querySelector("#bars").style = "transition: top 0.5s";
  }
}
window.addEventListener("scroll", scroll);
document.querySelector(".menu").addEventListener("click", () => {
  ends = true;
  scroll();
});
