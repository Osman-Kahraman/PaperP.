/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Osman KAHRAMAN
 *      Student ID: 172781221
 *      Date:       02.12.2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { categories, products } = window;
// For debugging, display all of our data in the console. You can remove this later.
console.log({ categories, products }, "App Data");

// Loader to load the categories as buttons in the menu. (fully dynamic)
//******************************************************************* */
document.addEventListener("DOMContentLoaded", () => {
  function AllArts() {
    const menu = document.getElementById("menu");

    categories.forEach((categories) => {
      const anchor = document.createElement("button");
      anchor.className = categories.id;
      anchor.innerHTML = categories.name;
      anchor.id = categories.artistId;
      menu.appendChild(anchor);
      anchor.addEventListener("click", clicked);

      //Acessing the space to load the products based on the selected categories
      const list = document.getElementById("card-container");

      //clearing any previous exisitng string values that might be stored in the list.
      list.innerHTML = "";

      //*************************************************************************** */
      products.forEach((products) => {
        if (products.categories === categories.id && !products.discontinued) {
          const cards = document.createElement("div");
          cards.classList.add("card");
          cards.style.backgroundColor = "#00000000";
          const wrapper = document.createElement("div");
          wrapper.classList.add("wrapper");

          const img = document.createElement("img");
          img.classList.add("cover-image");
          img.src = products.imageURL;

          const title = document.createElement("h3");
          title.classList.add("title");
          title.style.paddingTop = "65%";
          title.style.textAlign = "center";
          title.innerHTML = products.title;

          const description = document.createElement("p");
          description.classList.add("title");
          description.style.textAlign = "center";
          description.style.transition = "transform 0.3s";
          description.innerHTML = products.description;

          const main_img = document.createElement("img");
          main_img.classList.add("main_img");
          main_img.src = products.imageURL;

          const price = document.createElement("span");
          price.classList.add("title");
          price.style.textAlign = "center";
          price.style.transition = "transform 0.2s";
          price.textContent = `starts with $${products.priceD}.${products.priceC}`;

          wrapper.appendChild(img);
          cards.appendChild(wrapper);
          cards.appendChild(title);
          cards.appendChild(description);
          cards.appendChild(price);
          cards.appendChild(main_img);
          list.appendChild(cards);
        }
      });
    });
  }
  //calling the function here.
  AllArts();
  //***************************************************************** */

  //Functionality of the streaming app when button is pressed. (Fully dynamic)
  /*************************************************************************** */

  //getting the element id, to display the artists info.
  const artistlinks = document.getElementById("selected-category");

  //Funtion activated when user presses the button.
  function clicked(event) {
    const button = event.target;
    artistlinks.innerHTML = "";

    //loop going through categories.js
    categories.forEach((categories) => {
      //condition to see if the name on the button matches any member of the object in the array.
      if (button.innerHTML === categories.name) {
        //****************************************************************************************** */

        //Acessing the space to load the products based on the selected categories
        const list = document.getElementById("card-container");

        //clearing any previous exisitng string values that might be stored in the list.
        list.innerHTML = "";

        //*************************************************************************** */
        products.forEach((products) => {
          if (products.categories === categories.id && !products.discontinued) {
            const cards = document.createElement("div");
            cards.classList.add("card");
            cards.style.backgroundColor = "#00000000";
            const wrapper = document.createElement("div");
            wrapper.classList.add("wrapper");

            const img = document.createElement("img");
            img.classList.add("cover-image");
            img.src = products.imageURL;

            const title = document.createElement("h3");
            title.classList.add("title");
            title.style.paddingTop = "65%";
            title.style.textAlign = "center";
            title.innerHTML = products.title;

            const description = document.createElement("p");
            description.classList.add("title");
            description.style.textAlign = "center";
            description.style.transition = "transform 0.3s";
            description.innerHTML = products.description;

            const main_img = document.createElement("img");
            main_img.classList.add("main_img");
            main_img.src = products.imageURL;

            const price = document.createElement("span");
            price.classList.add("title");
            price.style.textAlign = "center";
            price.style.transition = "transform 0.2s";
            price.textContent = `starts with $${products.priceD}.${products.priceC}`;

            wrapper.appendChild(img);
            cards.appendChild(wrapper);
            cards.appendChild(title);
            cards.appendChild(description);
            cards.appendChild(price);
            cards.appendChild(main_img);
            list.appendChild(cards);
          }
        });
      }
    });
  }
});
