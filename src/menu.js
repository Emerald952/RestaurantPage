export default function menuPage(){
    const content = document.getElementById("content");

    const div = document.createElement("div");

    const menu = document.createElement("h1");
    menu.textContent = "Menu";

    const menuItems = document.createElement("ul");
    
    const item1 = document.createElement("li");
    item1.textContent="Vanilla Icecream";

    const item2 = document.createElement("li");
    item2.textContent="Choclate Icecream";

    const item3 = document.createElement("li");
    item3.textContent="Strawberry Icecream";

    const item4 = document.createElement("li");
    item4.textContent="Mango Icecream";

    const item5 = document.createElement("li");
    item5.textContent="Cookie n Cream Icecream";

    menuItems.append(item1, item2, item3, item4, item5)

    div.append(menu, menuItems);

    content.appendChild(div);

}