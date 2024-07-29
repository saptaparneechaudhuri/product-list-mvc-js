import cart from "../../images/icon-add-to-cart.svg";
import increment from "../../images/icon-increment-quantity.svg";
import decrement from "../../images/icon-decrement-quantity.svg";
import remove from "../../images/icon-remove-item.svg";

class DessertsView {
  _parentElement = document.querySelector("#recipe-container");

  _btnRed = document.querySelector(".btn-red");
  _data;

  render(data) {
    this._data = data;

    const markUp = this._generateMarkup();
    // console.log(typeof markUp);
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markUp);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  addHandlerAddToCart(handler) {
    // const btnWhite = document.querySelector(".btn-white");
    this._parentElement.addEventListener("click", function (e) {
      //   console.log(e.target.closest(".initial-btn"));
      const recipeItem = e.target.closest(".recipe-item");
      const btn = e.target.closest(".btn-white");
      //   console.log(btn);
      const btnInitial = btn.querySelector(".initial-btn");

      const btnClicked = btn.querySelector(".btn-clicked");
      const imageBoxSelected = btn.closest(".image-box");
      //   const btnValue = recipeItem.querySelector(".btn-value");

      //   const number = recipeItem.dataset.number;

      //   recipeItem.dataset.number = +number + 1;
      //   btnValue.textContent = +recipeItem.dataset.number;
      btnInitial.classList.add("hide");
      btnClicked.classList.remove("hide");
      imageBoxSelected.classList.add("selected");

      //   const itemData = recipeItem.dataset.name;

      const itemData = {
        name: recipeItem.dataset.name,
        number: +recipeItem.dataset.number,
        price: recipeItem.dataset.price,
        itemId: recipeItem.dataset.id,
        image: recipeItem.dataset.image,
      };

      handler(itemData);
    });
  }

  addHandlerIncrement(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btnIncrement = e.target.closest(".increment");

      const recipeItem = e.target.closest(".recipe-item");
      const btnValue = recipeItem.querySelector(".btn-value");

      if (!btnIncrement) return;

      const itemName = btnIncrement.dataset.name;
      const number = recipeItem.dataset.number;
      console.log(number);
      // change the value displayed on buttons
      btnValue.textContent = +number + 1;
      recipeItem.dataset.number = +number + 1;

      handler(itemName);
    });
  }

  addHandlerDecrement(handler1, hanlder2) {
    this._parentElement.addEventListener("click", function (e) {
      const btnDecrement = e.target.closest(".decrement");
      const recipeItem = e.target.closest(".recipe-item");
      const itemId = recipeItem.dataset.id;

      const btnValue = recipeItem.querySelector(".btn-value");

      if (!btnDecrement) return;

      const itemName = recipeItem.dataset.name;
      const number = recipeItem.dataset.number;

      // change the value displayed on buttons

      if (+number > 0) {
        btnValue.textContent = +number - 1;

        recipeItem.dataset.number = +number - 1;
        handler1(itemName);
      }

      if (+number === 0) {
        hanlder2(itemId);
      }
    });
  }

  addHandlerRemoveCartItem(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const recipeItem = e.target.closest(".recipe-item");
      const itemId = recipeItem.dataset.id;
      const number = recipeItem.dataset.number - 1;

      console.log(number);
      if (+number === 0) {
        handler(itemId);
      }
    });
  }

  addHandlerRender(handler) {
    // load desserts as page loads
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    // console.log(this._data);
    // return this._data
    //   .map((item, index) => this._generateMarkupPreview(item, index))
    //   .join("");

    return this._data
      .map((item) => {
        if (item.number > 0) {
          return this._generateMarkupSelected(item);
        } else {
          return this._generateMarkupPreview(item);
        }
      })
      .join("");
  }

  _generateMarkupPreview(item) {
    // console.log(`item-${index + 1}`);

    return `
           <div class="h-fit overflow-hidden recipe-item"  data-name=${
             item.name
           } data-number=${item.number + 1} data-price=${item.price} data-id=${
      item.id
    }  data-image=${item.image}>
            <div class="relative rounded-lg mb-8 image-box">
              <img
              src=${item.image}
                alt=${item.name}
                referrerpolicy="no-referrer"
                class="object-cover rounded-lg"
              />
              <div class="btn btn-white">
                <div class="initial-btn flex w-full">
                  <img src=${cart} alt="cart" />
                  Add to cart
                </div>

                <div class="btn-clicked btn-red hide">
                  <div class="btn-circle decrement" data-name=${item.name}>
                    <img
                      src=${decrement}
                      alt="cart"
                      class="hover:stroke-primary-red"
                    />
                  </div>
                  <div class="btn-value" >${+item.number + 1}</div>
                  <div class="btn-circle increment" data-name=${item.name}>
                    <img
                      src=${increment}
                      alt="cart"
                    />
                  </div>
                </div>
              </div>
             
            </div>

            <div class="bg-rosey-100">
              <p class="text-rosey-300 text-xs">${item.name}</p>
              <p class="text-sm text-rosey-900 font-medium">
                ${item.title}
              </p>
              <p class="text-primary-red text-base font-medium">$${
                item.price
              }</p>
            </div>
          </div>
        </div>
    `;
  }

  _generateMarkupSelected(item) {
    // console.log(`item-${index + 1}`);

    return `
           <div class="h-fit overflow-hidden recipe-item"  data-name=${
             item.name
           } data-number=${Math.max(+item.number, 1)} data-price=${
      item.price
    } data-id=${item.id}>
            <div class="relative rounded-lg mb-8 image-box selected">
              <img
              src=${item.image}
                alt=${item.name}
                referrerpolicy="no-referrer"
                class="object-cover rounded-lg"
              />
              <div class="btn btn-white">
                <div class="initial-btn flex w-full hide">
                  <img src=${cart} alt="cart" />
                  Add to cart
                </div>

                <div class="btn-clicked btn-red">
                  <div class="btn-circle decrement" data-name=${item.name}>
                    <img
                      src=${decrement}
                      alt="cart"
                      class="hover:stroke-primary-red"
                    />
                  </div>
                  <div class="btn-value" >${Math.max(+item.number, 1)}</div>
                  <div class="btn-circle increment" data-name=${item.name}>
                    <img
                      src=${increment}
                      alt="cart"
                    />
                  </div>
                </div>
              </div>
             
            </div>

            <div class="bg-rosey-100">
              <p class="text-rosey-300 md:text-xs text-lg">${item.name}</p>
              <p class="md:text-sm text-lg text-rosey-900 font-medium">
                ${item.title}
              </p>
              <p class="text-primary-red md:text-base text-lg font-medium">$${
                item.price
              }</p>
            </div>
          </div>
        </div>
    `;
  }
}

export default new DessertsView();
