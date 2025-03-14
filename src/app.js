import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {


let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const indiceramdom =(arr) => {
  return Math.floor(Math.random() * arr.length)
}

console.log(indiceramdom(who))
console.log(indiceramdom(action))
console.log(indiceramdom(what))
console.log(indiceramdom(when))

const valor =arr =>{
  return arr[indiceramdom(arr)]
}

console.log(valor(who))
console.log(valor(action))
console.log(valor(what))
console.log(valor(when))

let generador = [valor(who)] + ' ' + [valor(action)] + ' ' +[valor(what)] + ' ' +[valor(when)] ;




console.log (generador)
document.querySelector("#excuse").innerHTML=generador
}