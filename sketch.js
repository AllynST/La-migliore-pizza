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

  let PizzaOfTheDayImage = document.getElementById("")
  switch(dayNum){
    case 0 : //Niedziela
      PizzaOfTheDayImage.src = "Niedziela.jpg"
    break;
    case 1 : //Poniedziałek
      PizzaOfTheDayImage.src = "Poniedziałek.jpg"
    break;
    case 2 : //Wtorek
      PizzaOfTheDayImage.src = "Wtorek.jpg"
    break;
    case 3 : //Środa
      PizzaOfTheDayImage.src = "Środa.jpg"
    break;
    case 4 : //Czwartek
      PizzaOfTheDayImage.src = "Czwartek.jpg"
    break;
    case 5 : //Piątek
      PizzaOfTheDayImage.src = "Piątek.jpg"
    break;
    case 6 : //Sobota
      PizzaOfTheDayImage.src = "Sobota.jpg"
    break;
  }

  




}
function about(){
  let aboutUs = document.getElementById("aboutus")
  let aboutUsOfset = aboutUs.offsetTop
  let i = 0;
  let scroll;
  scroll = setInterval( () =>{
    window.scrollTo(0,i)
    i=i+100;
    if(aboutUsOfset <i){
      
      clearInterval(scroll);
      
    }

  },33)

}
function menu(){
  window.scrollTo(0,0);
  
  menuPage.style.display = 'block';
  landingPage.style.display = 'none';
  creatorEl.style.display="none"

}
function home(){
  window.scrollTo(0,0);
  
  menuPage.style.display = 'none';
  landingPage.style.display = 'block';
  creatorEl.style.display="none"
}
function creator(){
  window.scrollTo(0,0);
  menuPage.style.display = 'none';
  landingPage.style.display = 'none';
  creatorEl.style.display="block";
}

/*--------------------------------------------------------*/
//Obsługa zamówień. W przyszłości zamówienia będą rozpatrzane przez serwer
//na podstawie ciasteczek by uniknąć usunięcia zamówienia przy przeładowaniu 
//strony
/*--------------------------------------------------------*/



let ingrediment = ['ser pleśniowy','ser zółty','ser Lazur','ser Gorgonzola','cebula','szynka','kurczak','łosoś wędzony','tuńczyk','małże','krewetki','szpinak','bekon','ananas','oliwki','kabanos','salami','kukurydza','pieczarki']
let price = [4,2,3,4,1,2,4,3,3,3,3,3,3,2,2,2,4,1,2];
let order = [];

// Funkcja dodawania do zamówienia działa na podstawie indeksów, każdy indeks ma 
// odpowiadającą mu nazwe składnika oraz cene

let ingQ = document.getElementById("ingQ");
let quantity = document.getElementsByClassName("IngredientQ");

function Ing(a ,b){

  if(b == 'add'){
    order.unshift(a)
    ingQ.innerHTML = order.length;
    
   
    quantity[a].innerHTML = "x"+ (parseInt(quantity[a].innerHTML.substr(1,quantity[a].innerHTML.length))+1)

    
  }
  else if(b == 'subtract'){
    let i = order.indexOf(a);
    if(i != -1){
      quantity[a].innerHTML = "x"+ (parseInt(quantity[a].innerHTML.substr(1,quantity[a].innerHTML.length))-1)
      order.splice(i,1);
    }
    console.log(order)
   
    ingQ.innerHTML = order.length;
    

  }
  else{
    alert("Błąd dodawania")
  }
  updatePrice();
  

  
}

function updatePrice(){
  let finalPrice = 0
  for (q in order){
    finalPrice = finalPrice + price[order[q]]    
  }
  document.getElementById("ingP").innerHTML = finalPrice+"zł"
}

window.onscroll = function(){
  stickyBar();
};

let upperbar = document.getElementById("creatorUpper");
let sticky = 100;


function stickyBar() {
  if (window.pageYOffset >= sticky) {
    upperbar.classList.add("sticky")
  } else {
    upperbar.classList.remove("sticky");
  }
}


window.scrollTo(0,0);



