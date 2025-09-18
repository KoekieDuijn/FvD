// JavaScript Document
console.log("hi");

var menu = document.querySelector("button");

menu.onclick = toonMenu;

function toonMenu() {
    var navigatie = document.querySelector('nav');
    navigatie.classList.toggle('toonMenu');
  }

  var sluitButton = document.querySelector("nav button");

sluitButton.onclick = toonMenu;