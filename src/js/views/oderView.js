import carbonNeutral from "../../images/icon-carbon-neutral.svg";
import orderConfirmed from "../../images/icon-order-confirmed.svg";

class OrderView {
  _parentElement = document.querySelector("#modal");
  _data;
  _totalPrice = 0;

  render(data) {
    // console.log(this._parentElement);

    this._data = data;
    if (this._data.length > 0) {
      this._totalPrice = this._data.reduce((acc, currVal) => {
        return acc + +currVal.price * +currVal.number;
      }, 0);
      const markUp = this._generateMarkup();
      this._clear();
      this._parentElement.insertAdjacentHTML("afterbegin", markUp);
    }
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  addHandlerRender(handler) {
    // load cart as page loads
    window.addEventListener("load", handler);
  }

  addHandlerConfirm(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btnConfirm = e.target.closest(".btn-confirm");
      const parent = btnConfirm.closest("#modal");
      const body = btnConfirm.closest("#root");
      const mainContainer = body.querySelector("#main-container");
      // hide the modal and remove background blur

      parent.classList.add("hide");
      mainContainer.classList.remove("blur-bg");

      handler();
    });
  }

  _generateMarkup() {
    return `
        <img
        class="mb-2"
        src=${orderConfirmed}
        alt="order confirmed"
      />
      <h1 class="text-rosey-900 font-bold text-xl">Order Confirmed</h1>
      <p class="text-rosey-300 text-sm mb-4">We hope you enjoy your food!</p>
      <div class="bg-rosey-100 h-fit w-full p-2 mb-4">

      ${this._data
        .map((item) => {
          return this._generateItem(item);
        })
        .join("")}

       <div class="flex justify-between">
          <span class="text-rosey-500 font-medium text-sm">Order Total</span>
          <span class="text-rosey-900 font-bold text-base">$${this._totalPrice.toFixed(
            2
          )}</span>
        </div>
      </div>
      <button class="btn-order btn-confirm">Start New Order</button>





    `;
  }

  _generateItem(item) {
    return `
        <div
          class="flex justify-between items-center mb-4 border-b-2 border-rosey-300 p-2"
        >
          <div class="flex gap-2">
            <img src=${item.image} alt=${item.name} class="w-10 h-10" />
            <div>
              <h2 class="text-rosey-900 font-medium text-sm">${item.name}</h2>
              <div>
                <span class="text-primary-red font-medium text-sm mr-2"
                  >${item.number}x</span
                >
                <span class="text-rosey-400 text-sm mr-1">
                  <span class="text-sm">@</span>
                  <span>$${(+item.price).toFixed(2)}</span>
                </span>
              </div>
            </div>
          </div>
          <span class="text-rosey-500 font-semibold text-sm">$${(
            +item.number * +item.price
          ).toFixed(2)} </span>
        </div>
    `;
  }
}

export default new OrderView();
