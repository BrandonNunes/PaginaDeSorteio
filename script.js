'use strict'

let numberMax = document.getElementById("np");
let show = document.querySelector(".show h1");
const draw = document.getElementById("draw");

function start(){
    let value = numberMax.value;
   let sorting = Math.round(Math.random() * value);

  if(document.getElementById("np").value == 0){
      alert("Digite um numero diferente!")
     return show.innerHTML = "?";
  }

   if(sorting == 0){
        sorting++
        show.innerHTML = sorting;
   }

   show.innerHTML = sorting;
};