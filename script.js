var home = document.querySelector(".home");
var wwa = document.querySelector(".wwa");
var data = document.querySelector(".data");
var mav= document.querySelector(".mav");
var ppl = document.querySelector(".ppl");
var cnts= document.querySelector(".cnts");

var cirMenu = document.querySelector(".cir-menu");

home.addEventListener("mouseenter", function(){
    cirMenu.style.backgroundImage = "url(https://images.unsplash.com/photo-1710170600419-9771180c5dc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D)"
})
wwa.addEventListener("mouseenter", function(){
    cirMenu.style.backgroundImage = "url(https://images.unsplash.com/photo-1711127263278-07edabd1990d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D)"
})
data.addEventListener("mouseenter", function(){
    cirMenu.style.backgroundImage = "url(https://images.unsplash.com/photo-1711598850173-0b0a0f69b4f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D)"
})
mav.addEventListener("mouseenter", function(){
    cirMenu.style.backgroundImage = "url(https://images.unsplash.com/photo-1711499972674-1521ebb6c170?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D)"
})
ppl.addEventListener("mouseenter", function(){
    cirMenu.style.backgroundImage = "url(https://images.unsplash.com/photo-1711900197142-b0733129bf12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D)"
})
cnts.addEventListener("mouseenter", function(){
    cirMenu.style.backgroundImage = "url(https://images.unsplash.com/photo-1710267224216-8eced3320dac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D)"
})

var openR = document.querySelector(".ri-menu-line");
var closeR = document.querySelector(".ri-close-fill");
var mainMenu = document.querySelector(".menu");

openR.addEventListener("click", function(){
    mainMenu.style.top = "-100%";
    openR.style.display = "none";
    closeR.style.display = "initial";
})

closeR.addEventListener("click", function(){
    mainMenu.style.top = "-1000%";
    openR.style.display = "initial";
    closeR.style.display = "none";
})

