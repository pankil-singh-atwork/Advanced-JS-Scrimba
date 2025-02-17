/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/
import { contactsArr } from "./contactsData.js";
const patternSearchInput = document.getElementById("pattern-search-input");
const patternSearchSubmit = document.getElementById("pattern-search-submit");
const contactDisplay = document.getElementById("contact-display");
const matchedObj = contactsArr.filter((currObj) => currObj.name.includes("r"));
console.log(matchedObj);
matchedObj.forEach((item) => renderContact(item));

function renderContact(contactObj) {
  const contactCard = document.createElement("aside");
  contactCard.classList.add("contact-card");
  // rendering the current object fetched
  const nameElement = document.createElement("p");
  nameElement.textContent = contactObj.name;
  const emailElement = document.createElement("p");
  emailElement.textContent = contactObj.email;
  const phoneElement = document.createElement("p");
  phoneElement.textContent = contactObj.phone;
  // appends the elements to the contact card
  contactCard.appendChild(nameElement);
  contactCard.appendChild(emailElement);
  contactCard.appendChild(phoneElement);
  // appends the element to the main section to display
  contactDisplay.appendChild(contactCard);
  /*
    The CSS for contact-card has been done for you. 
    The name, email and phone details can be placed in
    'p' elements and placed inside contact-card. 
*/
}
