import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from"./about.js";

import "./styles.css";

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");


function clearContent (){
    const content = document.getElementById("content");
    content.innerHTML= "";
}
homeBtn.addEventListener("click", () =>{
    clearContent();
    homePage();
});
menuBtn.addEventListener("click", () => {
    clearContent();
    menuPage();
});
aboutBtn.addEventListener("click", () => {
    clearContent();
    aboutPage();
});

homePage();