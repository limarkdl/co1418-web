/*
Dynamic Hamburger menu for website
*/


var menuIsDisplayed = false;
function menu_render() {

    alert("Hello, world!");


    if (menuIsDisplayed == false) {

        menuIsDisplayed = true;

    } else {
        document.getElementById("menu").style.display = none;
        menuIsDisplayed = false;
    }
}


