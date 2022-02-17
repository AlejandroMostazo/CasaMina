const slider = document.querySelector("#contenedor");
let posicion = document.querySelectorAll(".slider");
let posicionultima = posicion[posicion.length -1];

const botoniz = document.querySelector("#izquierda");
const botonde = document.querySelector("#derecha");

slider.insertAdjacentElement('afterbegin', posicionultima);

function next() {
  let posicionfrist = document.querySelectorAll(".slider")[0];
  slider.style.marginLeft = "-200.5%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', posicionfrist);
    slider.style.marginLeft = "-100.5%";
  }, 500);
}

function prev() {
  let posicion = document.querySelectorAll(".slider");
  let posicionultima = posicion[posicion.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', posicionultima);
    slider.style.marginLeft = "-100.5%";
  }, 500);
}

botonde.addEventListener('click', function() {
  next();
});
botoniz.addEventListener('click', function() {
  prev();
});

setInterval(function() {
  next();
}, 10000);
