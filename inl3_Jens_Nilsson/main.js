"use strict";
//uppgift 1
function addClass1() {
  var v = document.getElementById("message-box");
  v.classList.add("success")
}
function addClass2() {
  var v = document.getElementById("message-box");
  v.classList.add("Error")
}
function addClass3() {
  var v = document.getElementById("message-box");
  v.classList.add("Info")
}
//uppgift 2
function addItem(){
  var c = document.createTextNode(window.prompt("Skriv något"));

  var b = document.createElement("li");
  b.appendChild(c);
  document.getElementById("items").appendChild(b);
}
//uppgift 3
function removeitem(){
var list = document.getElementById("items");
items.removeChild(items.lastElementChild);
}
//uppgift 4
function remove(){
var list = document.getElementById("list")

}
// Hämta alla knappar
var buttons = document.getElementsByClassName("remove-list-item");
// Gå igenom alla knappar och lägg till ett klick-event
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        // ...
    });
}
