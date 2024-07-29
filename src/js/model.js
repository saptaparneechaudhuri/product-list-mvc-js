export const state = {
  desserts: [
    {
      id: "1",
      name: "Waffle",
      title: "Waffle with Berries",
      price: 6.5,
      image: "https://i.imgur.com/LemIhRb.jpeg",
      number: 0,
    },
    {
      id: "2",
      name: "Crème Brûlée",
      title: "Vanilla Bean Crème Brûlée",
      price: 7,
      image: "https://i.imgur.com/1iOr8AB.jpeg",
      number: 0,
    },
    {
      id: "3",
      name: "Macaron",
      title: "Macaron Mix of Five",
      price: 8,
      image: "https://i.imgur.com/wniAhZU.jpeg",
      number: 0,
    },
    {
      id: "4",
      name: "Tiramisu",
      title: "Classic Tiramisu",
      price: 5.5,
      image: "https://i.imgur.com/Z5n07UG.jpeg",
      number: 0,
    },
    {
      id: "5",
      name: "Baklava",
      title: "Pistachio Baklava",
      price: 4,
      image: "https://i.imgur.com/lUOQR5k.jpeg",
      number: 0,
    },
    {
      id: "6",
      name: "Pie",
      title: "Lemon Meringue Pie",
      price: 5,
      image: "https://i.imgur.com/Cfak6qV.jpeg",
      number: 0,
    },
    {
      id: "7",
      name: "Cake",
      title: "Red Velvet Cake",
      price: 4.5,
      image: "https://i.imgur.com/ZFZr3cd.jpeg",
      number: 0,
    },
    {
      id: "8",
      name: "Brownie",
      title: "Salted Caramel Brownie",
      price: 4.5,
      image: "https://i.imgur.com/tdwo36O.jpeg",
      number: 0,
    },
    {
      id: "9",
      name: "Panna Cotta",
      title: "Vanilla Panna Cotta",
      price: 6.5,
      image: "https://i.imgur.com/RkvcVJa.jpeg",
      number: 0,
    },
  ],
  cart: [],
  totalPrice: 0,
};

// function to load recipe
export const loadDesserts = async function () {
  try {
    // const response = await fetch(`http://localhost:8000/desserts`);
    // const data = await response.json();
    // console.log(data);
    // state.desserts = [...data];
  } catch (err) {
    console.log(err);
  }
};

export const incrementDesserts = async function (itemData) {
  try {
    const itemIndex = state.desserts.findIndex(
      (item) => item.id === itemData.itemId
    );
    // const response = await fetch(
    //   `http://localhost:8000/desserts/${itemData.itemId}`,
    //   {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ number: +state.desserts[itemIndex].number + 1 }),
    //   }
    // );
    // const data = await response.json();

    // state.desserts[itemIndex] = { ...data };
    state.desserts[itemIndex].number = +state.desserts[itemIndex].number + 1;
  } catch (err) {
    console.log(err);
  }
};

export const decrementDesserts = async function (itemData) {
  try {
    const itemIndex = state.desserts.findIndex(
      (item) => item.id === itemData.itemId
    );
    // const response = await fetch(
    //   `http://localhost:8000/desserts/${itemData.itemId}`,
    //   {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       number: Math.max(+state.desserts[itemIndex].number - 1, 0),
    //     }),
    //   }
    // );
    // const data = await response.json();

    // state.desserts[itemIndex] = { ...data };
    state.desserts[itemIndex].number = +state.desserts[itemIndex].number - 1;
  } catch (err) {
    console.log(err);
  }
};

export const removeDesserts = function () {
  state.desserts = state.desserts.map((item) => {
    return {
      ...item,
      number: 0,
    };
  });
};

export const removeDessertItem = function (itemId) {
  const itemIndex = state.desserts.findIndex((item) => item.id === itemId);
  state.desserts[itemIndex].number = 0;
};

// export const loadCart = async function () {
//   try {
//     const response = await fetch(`http://localhost:8000/cart`);
//     const data = await response.json();
//     // console.log(data);

//     state.cart = [...data];
//     // calculateTotalPrice();
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const addToCart = async (itemData) => {
//   //   console.log(JSON.parse(itemData));
//   try {
//     // const itemPresent = state.cart.find((item) => {
//     //   return item.name === itemData.name;
//     // });

//     const response = await fetch(`http://localhost:8000/cart`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(itemData),
//     });
//     const data = await response.json();
//     // calculateTotalPrice();

//     // state.cart = [...state.cart, data];
//     state.cart = [...state.cart, itemData];
//   } catch (err) {
//     console.log(err);
//   }
// };

export const addToCart = function (itemData) {
  state.cart = [...state.cart, itemData];
};

// export const incrementItemCart = async function (itemData) {
//   try {
//     const name = itemData.name.toLowerCase();
//     const response = await fetch(
//       `http://localhost:8000/cart/${itemData.itemId}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ number: +itemData.number + 1 }),
//       }
//     );
//     const data = await response.json();

//     const itemIndex = state.cart.findIndex(
//       (item) => item.itemId === itemData.itemId
//     );
//     state.cart[itemIndex] = { ...data };

//     // console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const incrementItemCart = function (itemData) {
  const itemIndex = state.cart.findIndex(
    (item) => item.itemId === itemData.itemId
  );

  state.cart[itemIndex].number = +itemData.number + 1;
};

// export const decrementItemCart = async function (itemData) {
//   try {
//     if (!itemData) return;
//     const response = await fetch(
//       `http://localhost:8000/cart/${itemData.itemId}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ number: Math.max(+itemData.number - 1, 0) }),
//       }
//     );
//     const data = await response.json();
//     // if (data.number === 0) {
//     //   await deleteCart(data.itemId);
//     // }

//     const itemIndex = state.cart.findIndex(
//       (item) => item.itemId === itemData.itemId
//     );

//     state.cart[itemIndex] = { ...data };
//     // console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const decrementItemCart = function (itemData) {
  const itemIndex = state.cart.findIndex(
    (item) => item.itemId === itemData.itemId
  );

  // itemData.number = itemData.number - 1;
  // if (+itemData.number === 0) {
  //   deleteCart(itemData.itemId);
  // }

  state.cart[itemIndex].number = Math.max(+itemData.number - 1, 0);
};

export const calculateTotalPrice = function () {
  // calculate total

  state.totalPrice = state.cart.reduce((acc, currVal) => {
    return acc + +currVal.price * +currVal.number;
  }, 0);
};

// export const deleteCart = async function (itemId) {
//   try {
//     const newCart = state.cart.filter((item) => item.itemId !== itemId);
//     const response = await fetch(`http://localhost:8000/cart/${itemId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newCart),
//     });

//     const data = await data.json();
//     console.log("data", data);

//     state.cart = [...newCart];
//   } catch (err) {
//     console.log(err);
//   }
// };

export const deleteCart = function (itemId) {
  console.log("delete", state.cart);
  const newCart = state.cart.filter(
    (item) => item.itemId !== itemId && +item.number > 0
  );
  state.cart = [...newCart];
  console.log("after delete", state.cart);
};
