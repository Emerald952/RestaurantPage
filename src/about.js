export default function aboutPage(){
    const content = document.getElementById("content");

    const div = document.createElement("div");

    const contactHead = document.createElement("h1");
    contactHead.textContent="Contact Us"

    const chefCnt = document.createElement("h2");
    chefCnt.textContent="Chef:"
    const chefInfo = document.createElement("ul");

    const chefMail = document.createElement("li");
    const chefMailLink = document.createElement("a");
    chefMailLink.href="mailto:icychef123@realmail.com";
    chefMailLink.textContent="icychef123@realmail.com";
    chefMail.textContent="Email: ";
    chefMail.appendChild(chefMailLink);

    const chefPhone = document.createElement("li");
    const chefPhoneLink = document.createElement("a");
    chefPhoneLink.href="tel:+1234567890";
    chefPhoneLink.textContent="+1 234 567 890";
    chefPhone.textContent="Phone No: ";
    chefPhone.appendChild(chefPhoneLink);

    chefInfo.append(chefMail, chefPhone);

    const managerCnt = document.createElement("h2");
    managerCnt.textContent="Manager:"
    const managerInfo = document.createElement("ul");

    const managerMail = document.createElement("li");
    const managerMailLink = document.createElement("a");
    managerMailLink.href="mailto:icymanager456@realmail.com";
    managerMailLink.textContent="icymanager456@realmail.com";
    managerMail.textContent="Email: ";
    managerMail.appendChild(managerMailLink);

    const managerPhone = document.createElement("li");
    const managerPhoneLink = document.createElement("a");
    managerPhoneLink.href="tel:+1345678902";
    managerPhoneLink.textContent="+1 345 678 902";
    managerPhone.textContent="Phone No: ";
    managerPhone.appendChild(managerPhoneLink);

    managerInfo.append(managerMail, managerPhone);

    const waiterCnt = document.createElement("h2");
    waiterCnt.textContent="Waiter:"
    const waiterInfo = document.createElement("ul");

    const waiterMail = document.createElement("li");
    const waiterMailLink = document.createElement("a");
    waiterMailLink.href="mailto:icywaiter789@realmail.com";
    waiterMailLink.textContent="icywaiter789realmail.com";
    waiterMail.textContent="Email: ";
    waiterMail.appendChild(waiterMailLink);

    const waiterPhone = document.createElement("li");
    const waiterPhoneLink = document.createElement("a");
    waiterPhoneLink.href="tel:+1456789023";
    waiterPhoneLink.textContent="+1 4 567 89023";
    waiterPhone.textContent="Phone No: ";
    waiterPhone.appendChild(waiterPhoneLink);

    waiterInfo.append(waiterMail, waiterPhone);

    div.append(contactHead, chefCnt, chefInfo, managerCnt, managerInfo, waiterCnt, waiterInfo);

    content.appendChild(div);
}