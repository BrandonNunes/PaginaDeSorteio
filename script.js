'use strict'

let numberMax = document.getElementById("np");
let show = document.querySelector(".show");
const draw = document.getElementById("draw");

function start(){
    let value = numberMax.value;
   let sorting = Math.round(Math.random() * value);

   show.innerHTML = sorting;


};