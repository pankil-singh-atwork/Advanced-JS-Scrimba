import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";

function getPropertyHtml(currPropertyObj = placeholderPropertyObj) {
  const { propertyLocation, priceGBP, roomsM2, comment, image } =
    currPropertyObj;
  const toalSize = roomsM2.reduce((total, curr) => (total += curr), 0);
  return `<section class="card">
      <img src="/images/${image}">
      <div class="card-right">
          <h2>${propertyLocation}</h2>
          <h3>${priceGBP}</h3>
          <p>${comment}</p>
          <h3>${toalSize}m&sup2;</h3>
      </div>
  </section>`;
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById("container").innerHTML = propertyForSaleArr
  .map((currProperty) => getPropertyHtml(currProperty))
  .join("");

// const propertyHTML = propertyForSaleArr
//   .map((currProperty) => getPropertyHtml(currProperty))
//   .join("");

// console.log(propertyHTML);
