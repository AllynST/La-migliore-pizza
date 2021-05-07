


function onLoad(){
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        
      document.getElementById("main").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "main.txt", true);
  xhttp.send();
  

}
function menu(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
    
            
          document.getElementById("main").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "menu.txt", true);
      xhttp.send();
      
    
}

function About(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
    
            
          document.getElementById("main").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "style1.css", true);
      xhttp.send();
      
    
}




