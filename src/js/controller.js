import {
  state,
  loadDesserts,
  calculateTotalPrice,
  addToCart,
  loadCart,
  incrementItemCart,
  decrementItemCart,
  incrementDesserts,
  decrementDesserts,
  deleteCart,
  removeDesserts,
  removeDessertItem,
} from "./model";
import dessertsView from "./views/dessertsView";
import cartView from "./views/cartView";
import orderView from "./views/oderView";

if (module.hot) {
  module.hot.accept();
}

// let parentElement = document.querySelector(".recipe-item");
// let btn = document.querySelector(".btn-white");
// // console.log(btn);

// btn.addEventListener("click", function (e) {
//   // chsnge the styles here
//   //   btn.classList.add("hide");

//   const parent = e.target.closest(".recipe-item");
//   parent.querySelector(".btn-red").classList.remove("hide");
//   parent.querySelector(".initial-btn").classList.add("hide");
//   parent.querySelector(".image-box").classList.add("selected");
// });

const controlShowDesserts = async function () {
  try {
    // load desserts
    // await loadDesserts();

    // render html
    dessertsView.render(state.desserts);
  } catch (err) {
    console.log(err);
  }
};

const controlCart = async function () {
  try {
    console.log("cart reloaded");
    // await loadCart();

    // render cart

    cartView.render(state.cart);
  } catch (err) {
    console.log(err);
  }
};

const controlAddToCart = async function (itemData) {
  try {
    if (state.cart.length > 0) {
      const itemPresent = state.cart.find((item) => {
        return item.name === itemData.name;
      });

      if (itemPresent) {
        console.log("true");
        return;
      }
    }
    await incrementDesserts(itemData);
    // await addToCart(itemData);
    addToCart(itemData);

    // update views

    cartView.render(state.cart);
  } catch (err) {
    console.log(err);
  }
};

const controlIncrementItem = async function (itemName) {
  try {
    if (state.cart.length > 0) {
      const itemPresent = state.cart.find((item) => {
        return item.name === itemName;
      });

      if (itemPresent) {
        incrementItemCart(itemPresent);

        await incrementDesserts(itemPresent);
        // await loadCart();

        // render

        cartView.render(state.cart);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const controlDecrementItem = async function (itemName) {
  try {
    if (state.cart.length > 0) {
      const itemPresent = state.cart.find((item) => {
        return item.name === itemName;
      });

      if (!itemPresent) return;

      await decrementDesserts(itemPresent);

      // await decrementItemCart(itemPresent);

      decrementItemCart(itemPresent);
      if (itemPresent.number === 0) {
        deleteCart(itemPresent.itemId);
      }

      dessertsView.render(state.desserts);
      cartView.render(state.cart);

      // render

      // await loadCart();
    }
  } catch (err) {
    console.log(err);
  }
};

const controlDeleteCart = async function (itemId) {
  try {
    // await deleteCart(itemId);
    deleteCart(itemId);
    // await loadCart();

    //render
    removeDessertItem(itemId);
    dessertsView.render(state.desserts);
    cartView.render(state.cart);
  } catch (err) {
    console.log(err);
  }
};

const controlFinalOrder = function () {
  // render final order view
  orderView.render(state.cart);
};

const controlStartNew = async function () {
  try {
    state.cart = [];
    removeDesserts();

    // remove number from desserts using api
    dessertsView.render(state.desserts);
    cartView.render(state.cart);
  } catch (err) {
    console.log(err);
  }
};

const controlDeleteItem = function (itemId) {
  deleteCart(itemId);
  removeDessertItem(itemId);
  console.log(state.desserts);
  dessertsView.render(state.desserts);
  cartView.render(state.cart);
};

function init() {
  dessertsView.addHandlerRender(controlShowDesserts);
  dessertsView.addHandlerAddToCart(controlAddToCart);
  dessertsView.addHandlerIncrement(controlIncrementItem);
  dessertsView.addHandlerDecrement(controlDecrementItem, controlDeleteCart);
  // dessertsView.addHandlerRemoveCartItem(controlDeleteCart);

  cartView.addHandlerRender(controlCart);
  // cartView.addHandlerDeleteCart(controlDeleteCart);
  cartView.addHandlerConfirmOrder(controlFinalOrder);
  cartView.addHanlderRemoveItem(controlDeleteItem);

  orderView.addHandlerRender(controlFinalOrder);
  orderView.addHandlerConfirm(controlStartNew);
}

init();
