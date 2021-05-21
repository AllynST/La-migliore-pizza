daily();
let landingPage = document.getElementById("landingPage");
let menuPage = document.getElementById("menuPage");
let creatorEl = document.getElementById("creator");
function daily() {

  let container = document.getElementById("dateBox");


  let d = new Date();
  let dayNum = d.getDate();

  let days = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];
  let month = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Wrzesień","Październik","Listopad","Grudzień"]

  let final =  days[d.getDay()]+" " +dayNum +" "+month[d.getMonth()]+" "+d.getFullYear();
  container.innerHTML = final;




}
function about(){
  //window scrollto(x,y)

}
function menu(){
  
  menuPage.style.display = 'block';
  landingPage.style.display = 'none';
  creatorEl.style.display="none"

}
function home(){
  
  menuPage.style.display = 'none';
  landingPage.style.display = 'block';
  creatorEl.style.display="none"
}
function creator(){
  menuPage.style.display = 'none';
  landingPage.style.display = 'none';
  creatorEl.style.display="block";
}

console.log( document.getElementsByClassName('pizzaofchoice'))

function addToOrder(a){
let pizzas = ['margerita','pizzeria']
let pizzaIndex = a;

let pizzaSize = document.getElementsByClassName('pizzaofchoice').value[a];
console.log(pizzas[a]+" "+pizzaSize)
}