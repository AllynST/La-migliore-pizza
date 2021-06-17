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
      PizzaOfTheDayImage.src = "images/Capri.jpg"
      PizzaOfTheDayName.innerHTML = 'Capri mega'
      PizzaOfTheDayPrice.innerHTML = '<span class="crossed">60 zł</span> 38 zł'
    break;
    case 1 : //Poniedziałek
      PizzaOfTheDayImage.src = "images/Hawajska.jpg"
      PizzaOfTheDayName.innerHTML = 'Hawajska mega'
      PizzaOfTheDayPrice.innerHTML = '<span class="crossed">45 zł</span> 32 zł'
    break;
    case 2 : //Wtorek
      PizzaOfTheDayImage.src = "images/Primavera.jpg"
      PizzaOfTheDayName.innerHTML = 'Primavera mega'
      PizzaOfTheDayPrice.innerHTML = '<span class="crossed">65 zł</span> 40 zł'
    break;
    case 3 : //Środa
      PizzaOfTheDayImage.src = "images/Funghi.jpg"
      PizzaOfTheDayName.innerHTML = 'Funghi mega'
      PizzaOfTheDayPrice.innerHTML = '<span class="crossed">55 zł</span> 45 zł'
    break;
    case 4 : //Czwartek
      PizzaOfTheDayImage.src = "images/Salame.jpg"
      PizzaOfTheDayName.innerHTML = 'Salame mega'
      PizzaOfTheDayPrice.innerHTML = '<span class="crossed">60 zł</span> 52 zł'
    break;
    case 5 : //Piątek
      
      PizzaOfTheDayImage.src = "images/Margerita.jpg"
      PizzaOfTheDayName.innerHTML = 'Margerita'
      PizzaOfTheDayPrice.innerHTML = '24 zł'
    break;
    case 6 : //Sobota
      PizzaOfTheDayImage.src = "images/Margerita.jpg"
      PizzaOfTheDayName.innerHTML = ' Margerita mega'
      PizzaOfTheDayPrice.innerHTML = '<span class="crossed">50 zł</span> 32 zł'
    break;

  }
}

//
window.addEventListener("scroll",()=>{
  state = false;
      divExpanding.style.animation = "navCollapse 0.5s forwards"
      navButton.style.animation = "rotateRight 0.5s forwards ease-out"
      for(let i = 0 ;i<3;i++){
        
          navbarMobItms[i].style.animation = "disappear 0.2s forwards"
      }

})


let state = false
let navButton = document.getElementById("navButton");
let divExpanding = document.getElementById("expand");
let navbarMobItms = document.getElementsByClassName("mobileNavItm")

function navExpand(){ 
  
    if(state){

      state = false;
      divExpanding.style.animation = "navCollapse 0.5s forwards"
      navButton.style.animation = "rotateLeft 0.5s forwards ease-out"
      for(let i = 0 ;i<3;i++){       
          navbarMobItms[i].style.animation = "disappear 0.2s forwards"
      }


    }
    else{
      state = true;
      divExpanding.style.animation = "navExpand 0.5s forwards"
      navButton.style.animation = "rotateRight 0.5s ease-out"
      setTimeout(()=>{
        for(let i = 0 ;i<3;i++){          
          navbarMobItms[i].style.animation = "appear 0.2s forwards"          
        }

      },500)

    }
}

//Funkcje nawigujące po stronie na podstawie display = block/none;
function about(){
  menuPage.style.display = 'none';
  landingPage.style.display = 'grid';
  creatorEl.style.display="none"
  let aboutUs = document.getElementById("aboutus")
  let aboutUsOfset = aboutUs.offsetTop
  let i = 0;
  let scroll;
  scroll = setInterval( () =>{
    window.scrollTo(0,i)
    i=i+50;
    if(aboutUsOfset*1.2 <i){
      
      clearInterval(scroll);
      
    }

  },15)

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
  updatePrice();
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
    
    if(parseInt(quantity[a].innerHTML.substr(1,quantity[a].innerHTML.length)) <20){
      quantity[a].innerHTML = "x"+ (parseInt(quantity[a].innerHTML.substr(1,quantity[a].innerHTML.length))+1)
      order.unshift(a)
      ingQ.innerHTML = order.length;
    
    }
    else {
      alert("Osiągnięto maksymalną ilość składników")
    }
    

    
  }
  else if(b == 'subtract'){
    let i = order.indexOf(a);
    if(i != -1){
      quantity[a].innerHTML = "x"+ (parseInt(quantity[a].innerHTML.substr(1,quantity[a].innerHTML.length))-1)
      order.splice(i,1);
    }
    
   
    ingQ.innerHTML = order.length;
    

  }
  else{
    alert("Błąd dodawania")
  }
  updatePrice();
  

  
}

function updatePrice(){
  let finalPrice = 0
  let size = document.getElementById("creatorSize").value;
  for (q in order){
    finalPrice = finalPrice + price[order[q]]    
  }
  
  finalPrice = finalPrice + parseInt(size)
  document.getElementById("ingP").innerHTML = finalPrice+" "+"zł"
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



