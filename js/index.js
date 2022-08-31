/*
function loading() {
    document.querySelector(".skeleton").style.display = "none"
}
*/


var i = setInterval(function () {
    
    clearInterval(i);
  
    // O código desejado é apenas isto:
    document.querySelector(".skeleton").style.display = "none";
    document.querySelector("#container").style.display = "inline";

}, 4000);