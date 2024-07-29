import emptyCart from "../../images/illustration-empty-cart.svg";
import removeItem from "../../images/icon-remove-item.svg";
import carbonNeutral from "../../images/icon-carbon-neutral.svg";

class CartView {
  _parentElement = document.querySelector("#cart");

  _emptyCart = document.querySelector(".empty-cart");
  _fullCart = document.querySelector(".full-cart");
  _data;
  _totalItems = 0;
  _totalPrice = 0;

  render(data) {
    this._data = data;
    // console.log(this._data.length);

    let markUp = "";
    if (!data || (Array.isArray(data) && data.length === 0)) {
      this._totalItems = 0;

      // render empty cart div

      markUp = this._renderEmptyCart();
    } else if (this._data.length > 0) {
      // console.log("i am in else of cartview");
      this._totalItems = this._data.reduce((acc, currVal) => {
        return acc + +currVal.number;
      }, 0);
      this._totalPrice = this._data.reduce((acc, currVal) => {
        return acc + +currVal.price * +currVal.number;
      }, 0);

      markUp = this._renderCart();
    }

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markUp);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  addHandlerRender(handler) {
    // load cart as page loads
    window.addEventListener("load", handler);
  }

  addHandlerConfirmOrder(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btnOrder = e.target.closest(".btn-order");
      if (!btnOrder) return;
      const mainElement = btnOrder.closest("#main-container");
      const body = mainElement.closest("#root");
      const modal = body.querySelector("#modal");

      // display the modal and blur the background
      mainElement.classList.add("blur-bg");
      modal.classList.remove("hide");

      handler();
    });
  }

  // addHandlerDeleteCart(handler) {
  //   const cartItem = this._parentElement.querySelector(".cart-item");
  //   const number = cartItem.dataset.number;
  //   const itemId = cartItem.dataset.item;

  //   if (+number === 0) {
  //     handler(itemId);
  //   }
  // }

  addHanlderRemoveItem(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const cartItem = e.target.closest(".cart-item");
      if (!cartItem) return;
      const itemId = cartItem.dataset.item;

      handler(itemId);
    });
  }

  _renderEmptyCart() {
    return `
    <div>
     <h1 class="text-primary-red font-bold md:text-xl text-2xl mb-8">
          Your Cart <span>(${this._totalItems})</span>
        </h1>
     <div class="mx-auto text-center empty-cart">
          <img
            src=${emptyCart}
            alt="empty"
            class="mx-auto mb-5"
          />
          <p class="text-rosey-500 font-semibold">
            Your added items will appear here
          </p>
        </div>
    </div>
       
    `;
  }

  _renderCart() {
    return `
        <div>
            <h1 class="text-primary-red font-bold md:text-xl text-2xl mb-8">
          Your Cart <span>(${this._totalItems})</span>
        </h1>
       
        <div class="full-cart">

        ${
          this._data.length > 0 &&
          this._data
            .map((item) => {
              return this._renderCartItem(item);
            })
            .join("")
        }
         </div>
         <div class="flex justify-between mt-5 mb-5 order-total">
         <span class="text-rosey-500 font-medium md:text-base text-lg"
              >Order Total</span
            >
            <span class="text-rosey-900 font-bold text-lg">$${this._totalPrice.toFixed(
              2
            )}</span>
          </div>
          <div
            class="p-4 bg-rosey-100 rounded-lg flex gap-2 items-center justify-center mb-5"
          >
            <img
              src=${carbonNeutral}
              alt="carbon neutral"
            />
            <p class="text-sm text-rosey-400">
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>

          <button class="btn-order">Confirm order</button>
        </div> 

        
        `;
  }

  _renderCartItem(item) {
    return `
         <div
            class="cart-item flex justify-between items-center pb-4 border-b-2 border-rosey-100" data-number=${
              item.number
            } data-item=${item.itemId}
          >
            <div>
              <h2 class="text-rosey-900 font-medium mb-2 text-lg sm:text-base">${
                item.name
              }</h2>
              <div>
                <span class="text-primary-red font-medium md:text-base text-lg mr-2"
                  >${item.number}x</span
                >
                <span class="text-rosey-400 md:text-sm text-base mr-1">
                  <span class="md:text-sm text-base">@</span>
                  <span>$${(+item.price).toFixed(2)}</span>
                </span>
                <span class="text-rosey-500 font-semibold md:text-sm text-base">${(
                  +item.number * +item.price
                ).toFixed(2)}</span>
              </div>
            </div>
            <div class="border-2 rounded-full p-1 border-rosey-300 cursor-pointer remove-icon" data-id=${
              item.itemId
            }>
              <img src=${removeItem} alt="remove" />
            </div>
          </div>
           
        
    `;
  }
}

export default new CartView();
