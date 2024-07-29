// if (module.hot) {
//   module.hot.accept();
// }
let parentElement = document.querySelector(".recipe-item");
let btn = document.querySelector(".btn-white");
// console.log(btn);
btn.addEventListener("click", function(e) {
    // chsnge the styles here
    //   btn.classList.add("hide");
    const parent = e.target.closest(".recipe-item");
    parent.querySelector(".btn-red").classList.remove("hide");
    parent.querySelector(".initial-btn").classList.add("hide");
    parent.querySelector(".image-box").classList.add("selected");
});

//# sourceMappingURL=index.09c24910.js.map
