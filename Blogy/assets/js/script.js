'use strict';

const addEventOnElem = function(elem, type, callBack){
    if(elem.length > 1){
        for(let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type, callBack)
        }
    }else{
        elem.addEventListener(type,callBack)
    }

}


const navbar = document.querySelector("[data-navbar]")
const navbarLinks = document.querySelectorAll("[data-nav-link]")
const toggleBtn = document.querySelector("[data-nav-toggler]")


const navToggle = function(){
    navbar.classList.toggle("active")
    this.classList.toggle("active")
}



addEventOnElem(toggleBtn, "click", navToggle )

const closeToggle = function() {
    navbar.classList.remove("active")
    this.classList.remove("active")
}


addEventOnElem(navbarLinks, "click", closeToggle)


const searchBar = document.querySelector("[data-search-bar]")

const searchTogglers = document.querySelectorAll("[data-search-toggler]")

const overlay = document.querySelector("[data-overlay ]")


const toggleSearchBar = function () {
 searchBar.classList.toggle("active")
 overlay.classList.toggle("active")
 document.body.classList.toggle("active") 

} 

addEventOnElem(searchTogglers, "click", toggleSearchBar)

