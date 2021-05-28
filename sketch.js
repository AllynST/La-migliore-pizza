daily();
let landingPage = document.getElementById("landingPage");
let menuPage = document.getElementById("menuPage");
let creatorEl = document.getElementById("creator");
function daily() {

  //pobieranie aktualnej daty 

  let container = document.getElementById("dateBox");


  let d = new Date();
  let dayNum = d.getDate();

  let days = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];
  let month = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Wrzesień","Październik","Listopad","Grudzień"];

  let final =  days[d.getDay()]+" " +dayNum +" "+month[d.getMonth()]+" "+d.getFullYear();
  container.innerHTML = final;

   //Zmiana pizzy dnia na podstawie aktualnego dnia

  let PizzaOfTheDayImage = document.getElementById("pizzaOfTheDayImage")
  let PizzaOfTheDayName = document.getElementById("pizzaOfTheDayName")
  let PizzaOfTheDayPrice = document.getElementById("pizzaOfTheDayPrice")


 
  switch(d.getDay()){
    case 0 : //Niedziela    
      PizzaOfTheDayImage.src = "Niedziela.gif"
      PizzaOfTheDayName.innerHTML = 'Margerita'
      PizzaOfTheDayPrice.innerHTML = '24 zł'
    break;
    case 1 : //Poniedziałek
      PizzaOfTheDayImage.src = "Poniedziałek.gif"
      PizzaOfTheDayName.innerHTML = 'Margerita'
      PizzaOfTheDayPrice.innerHTML = '24 zł'
    break;
    case 2 : //Wtorek
      PizzaOfTheDayImage.src = "Wtorek.gif"
      PizzaOfTheDayName.innerHTML = 'Margerita'
      PizzaOfTheDayPrice.innerHTML = '24 zł'
    break;
    case 3 : //Środa
      PizzaOfTheDayImage.src = "Środa.gif"
      PizzaOfTheDayName.innerHTML = 'Margerita'
      PizzaOfTheDayPrice.innerHTML = '24 zł'
    break;
    case 4 : //Czwartek
      PizzaOfTheDayImage.src = "Czwartek.gif"
      PizzaOfTheDayName.innerHTML = 'Margerita'
      PizzaOfTheDayPrice.innerHTML = '24 zł'
    break;
    case 5 : //Piątek
      
      PizzaOfTheDayImage.src = "Piątek.gif"
      PizzaOfTheDayName.innerHTML = 'Margerita'
      PizzaOfTheDayPrice.innerHTML = '24 zł'
    break;
    case 6 : //Sobota
      PizzaOfTheDayImage.src = "Sobota.gif"
      PizzaOfTheDayName.innerHTML = 'Margerita'
      PizzaOfTheDayPrice.innerHTML = '24 zł'
    break;

  }
}

//Funkcje nawigujące po stronie na podstawie display = block/none;
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
  landingPage.style.display = 'grid';
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



///------------------------------------------------////
// Dodawanie klasy z position fixed by informacja o ilości składników 
//była cały czas na ekranie

window.onscroll = () =>{
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
// w celu naprawienia błędu scrolowania w przeglądare chrome



