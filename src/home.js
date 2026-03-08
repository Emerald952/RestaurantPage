export default function homePage(){
    const content = document.getElementById("content");

    const div = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent="Icy Icecream Parlor";

    const welcomeText = document.createElement("p");
    welcomeText.textContent = "Welcome to Icy Icecream Parlor! May your taste buds experience heaven!!!"
    welcomeText.setAttribute("id", "welcomeTxt");

    const text = document.createElement("p");
    text.textContent="We serve the best of Icecream in the town. The flavor will cool away the heat, and our warm customer service and cozy ambience will you make you feel right at home. This is the the kind of place where you want to visit again and again...."

    div.append(title, welcomeText,text);

    const openingHrs = document.createElement("h2");
    openingHrs.textContent = "Opening Hours:"

    const week = document.createElement("p");
    week.textContent = "All 7 Days of week";

    const hrs = document.createElement("p");
    hrs.textContent = "From 10am to 10pm at your service!!!"

    div.append(openingHrs, week, hrs);

    const addressHead = document.createElement("h2");
    addressHead.textContent = "Address:"

    const address = document.createElement("address");
    address.textContent = "Next door neighbor of Mr Sherlock Holmes, 221 Baker Street, London.";

    
    div.append(addressHead, address);

    content.append(div);
}