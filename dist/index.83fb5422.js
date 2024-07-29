function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,r={},a={},n=t.parcelRequireb14b;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequireb14b=n),(0,n.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,a=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)a.set(t[r],{baseUrl:e,path:t[r+1]})}}),n("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.83fb5422.js","e8LEP","icon-add-to-cart.e5a1fee2.svg","jloKf","icon-increment-quantity.6422bfd4.svg","cK46W","icon-decrement-quantity.256f9b09.svg","25OWj","icon-remove-item.e6b7ada8.svg","7DsB0","illustration-empty-cart.ef2fe825.svg","hfAWe","icon-carbon-neutral.6efd558e.svg","e7oIb","icon-order-confirmed.21c2ea07.svg"]'));const i={desserts:[{id:"1",name:"Waffle",title:"Waffle with Berries",price:6.5,image:"https://i.imgur.com/LemIhRb.jpeg",number:0},{id:"2",name:"Crème Brûlée",title:"Vanilla Bean Crème Brûlée",price:7,image:"https://i.imgur.com/1iOr8AB.jpeg",number:0},{id:"3",name:"Macaron",title:"Macaron Mix of Five",price:8,image:"https://i.imgur.com/wniAhZU.jpeg",number:0},{id:"4",name:"Tiramisu",title:"Classic Tiramisu",price:5.5,image:"https://i.imgur.com/Z5n07UG.jpeg",number:0},{id:"5",name:"Baklava",title:"Pistachio Baklava",price:4,image:"https://i.imgur.com/lUOQR5k.jpeg",number:0},{id:"6",name:"Pie",title:"Lemon Meringue Pie",price:5,image:"https://i.imgur.com/Cfak6qV.jpeg",number:0},{id:"7",name:"Cake",title:"Red Velvet Cake",price:4.5,image:"https://i.imgur.com/ZFZr3cd.jpeg",number:0},{id:"8",name:"Brownie",title:"Salted Caramel Brownie",price:4.5,image:"https://i.imgur.com/tdwo36O.jpeg",number:0},{id:"9",name:"Panna Cotta",title:"Vanilla Panna Cotta",price:6.5,image:"https://i.imgur.com/RkvcVJa.jpeg",number:0}],cart:[]},s=async function(e){try{let t=i.desserts.findIndex(t=>t.id===e.itemId);i.desserts[t].number=+i.desserts[t].number+1}catch(e){console.log(e)}},d=async function(e){try{let t=i.desserts.findIndex(t=>t.id===e.itemId);i.desserts[t].number=+i.desserts[t].number-1}catch(e){console.log(e)}},c=function(){i.desserts=i.desserts.map(e=>({...e,number:0}))},l=function(e){let t=i.desserts.findIndex(t=>t.id===e);i.desserts[t].number=0},o=function(e){i.cart=[...i.cart,e]},m=function(e){let t=i.cart.findIndex(t=>t.itemId===e.itemId);i.cart[t].number=+e.number+1},u=function(e){let t=i.cart.findIndex(t=>t.itemId===e.itemId);i.cart[t].number=Math.max(+e.number-1,0)},p=function(e){console.log("delete",i.cart);let t=i.cart.filter(t=>t.itemId!==e&&+t.number>0);i.cart=[...t],console.log("after delete",i.cart)};var b={};b=new URL("icon-add-to-cart.e5a1fee2.svg",import.meta.url).toString();var f={};f=new URL("icon-increment-quantity.6422bfd4.svg",import.meta.url).toString();var g={};g=new URL("icon-decrement-quantity.256f9b09.svg",import.meta.url).toString();var v={};v=new URL("icon-remove-item.e6b7ada8.svg",import.meta.url).toString();class h{_parentElement=document.querySelector("#recipe-container");_btnRed=document.querySelector(".btn-red");_data;render(e){this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}addHandlerAddToCart(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".recipe-item"),a=t.target.closest(".btn-white"),n=a.querySelector(".initial-btn"),i=a.querySelector(".btn-clicked"),s=a.closest(".image-box");n.classList.add("hide"),i.classList.remove("hide"),s.classList.add("selected"),e({name:r.dataset.name,number:+r.dataset.number,price:r.dataset.price,itemId:r.dataset.id,image:r.dataset.image})})}addHandlerIncrement(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".increment"),a=t.target.closest(".recipe-item"),n=a.querySelector(".btn-value");if(!r)return;let i=r.dataset.name,s=a.dataset.number;console.log(s),n.textContent=+s+1,a.dataset.number=+s+1,e(i)})}addHandlerDecrement(e,t){this._parentElement.addEventListener("click",function(r){let a=r.target.closest(".decrement"),n=r.target.closest(".recipe-item"),i=n.dataset.id,s=n.querySelector(".btn-value");if(!a)return;let d=n.dataset.name,c=n.dataset.number;+c>0&&(s.textContent=+c-1,n.dataset.number=+c-1,e(d)),0==+c&&t(i)})}addHandlerRemoveCartItem(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".recipe-item"),a=r.dataset.id,n=r.dataset.number-1;console.log(n),0==+n&&e(a)})}addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>e.number>0?this._generateMarkupSelected(e):this._generateMarkupPreview(e)).join("")}_generateMarkupPreview(t){return`
           <div class="h-fit overflow-hidden recipe-item"  data-name=${t.name} data-number=${t.number+1} data-price=${t.price} data-id=${t.id}  data-image=${t.image}>
            <div class="relative rounded-lg mb-8 image-box">
              <img
              src=${t.image}
                alt=${t.name}
                referrerpolicy="no-referrer"
                class="object-cover rounded-lg"
              />
              <div class="btn btn-white">
                <div class="initial-btn flex w-full">
                  <img src=${e(b)} alt="cart" />
                  Add to cart
                </div>

                <div class="btn-clicked btn-red hide">
                  <div class="btn-circle decrement" data-name=${t.name}>
                    <img
                      src=${e(g)}
                      alt="cart"
                      class="hover:stroke-primary-red"
                    />
                  </div>
                  <div class="btn-value" >${+t.number+1}</div>
                  <div class="btn-circle increment" data-name=${t.name}>
                    <img
                      src=${e(f)}
                      alt="cart"
                    />
                  </div>
                </div>
              </div>
             
            </div>

            <div class="bg-rosey-100">
              <p class="text-rosey-300 text-xs">${t.name}</p>
              <p class="text-sm text-rosey-900 font-medium">
                ${t.title}
              </p>
              <p class="text-primary-red text-base font-medium">$${t.price}</p>
            </div>
          </div>
        </div>
    `}_generateMarkupSelected(t){return`
           <div class="h-fit overflow-hidden recipe-item"  data-name=${t.name} data-number=${Math.max(+t.number,1)} data-price=${t.price} data-id=${t.id}>
            <div class="relative rounded-lg mb-8 image-box selected">
              <img
              src=${t.image}
                alt=${t.name}
                referrerpolicy="no-referrer"
                class="object-cover rounded-lg"
              />
              <div class="btn btn-white">
                <div class="initial-btn flex w-full hide">
                  <img src=${e(b)} alt="cart" />
                  Add to cart
                </div>

                <div class="btn-clicked btn-red">
                  <div class="btn-circle decrement" data-name=${t.name}>
                    <img
                      src=${e(g)}
                      alt="cart"
                      class="hover:stroke-primary-red"
                    />
                  </div>
                  <div class="btn-value" >${Math.max(+t.number,1)}</div>
                  <div class="btn-circle increment" data-name=${t.name}>
                    <img
                      src=${e(f)}
                      alt="cart"
                    />
                  </div>
                </div>
              </div>
             
            </div>

            <div class="bg-rosey-100">
              <p class="text-rosey-300 text-xs">${t.name}</p>
              <p class="text-sm text-rosey-900 font-medium">
                ${t.title}
              </p>
              <p class="text-primary-red text-base font-medium">$${t.price}</p>
            </div>
          </div>
        </div>
    `}}var _=new h,x={};x=new URL("illustration-empty-cart.ef2fe825.svg",import.meta.url).toString();var y={};y=new URL("icon-carbon-neutral.6efd558e.svg",import.meta.url).toString();class ${_parentElement=document.querySelector("#cart");_emptyCart=document.querySelector(".empty-cart");_fullCart=document.querySelector(".full-cart");_data;_totalItems=0;_totalPrice=0;render(e){this._data=e;let t="";!e||Array.isArray(e)&&0===e.length?(this._totalItems=0,t=this._renderEmptyCart()):this._data.length>0&&(this._totalItems=this._data.reduce((e,t)=>e+ +t.number,0),this._totalPrice=this._data.reduce((e,t)=>e+ +t.price*+t.number,0),t=this._renderCart()),this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}addHandlerRender(e){window.addEventListener("load",e)}addHandlerConfirmOrder(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn-order");if(!r)return;let a=r.closest("#main-container"),n=a.closest("#root").querySelector("#modal");a.classList.add("blur-bg"),n.classList.remove("hide"),e()})}addHanlderRemoveItem(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".cart-item");r&&e(r.dataset.item)})}_renderEmptyCart(){return`
    <div>
     <h1 class="text-primary-red font-bold text-xl mb-8">
          Your Cart <span>(${this._totalItems})</span>
        </h1>
     <div class="mx-auto text-center empty-cart">
          <img
            src=${e(x)}
            alt="empty"
            class="mx-auto mb-5"
          />
          <p class="text-rosey-500 font-semibold">
            Your added items will appear here
          </p>
        </div>
    </div>
       
    `}_renderCart(){return`
        <div>
            <h1 class="text-primary-red font-bold text-xl mb-8">
          Your Cart <span>(${this._totalItems})</span>
        </h1>
       
        <div class="full-cart">

        ${this._data.length>0&&this._data.map(e=>this._renderCartItem(e)).join("")}
         </div>
         <div class="flex justify-between mt-5 mb-5 order-total">
         <span class="text-rosey-500 font-medium text-base"
              >Order Total</span
            >
            <span class="text-rosey-900 font-bold text-lg">$${this._totalPrice.toFixed(2)}</span>
          </div>
          <div
            class="p-4 bg-rosey-100 rounded-lg flex gap-2 items-center justify-center mb-5"
          >
            <img
              src=${e(y)}
              alt="carbon neutral"
            />
            <p class="text-sm text-rosey-400">
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>

          <button class="btn-order">Confirm order</button>
        </div> 

        
        `}_renderCartItem(t){return`
         <div
            class="cart-item flex justify-between items-center pb-4 border-b-2 border-rosey-100" data-number=${t.number} data-item=${t.itemId}
          >
            <div>
              <h2 class="text-rosey-900 font-medium mb-2">${t.name}</h2>
              <div>
                <span class="text-primary-red font-medium text-base mr-2"
                  >${t.number}x</span
                >
                <span class="text-rosey-400 text-sm mr-1">
                  <span class="text-sm">@</span>
                  <span>$${(+t.price).toFixed(2)}</span>
                </span>
                <span class="text-rosey-500 font-semibold text-sm">${(+t.number*+t.price).toFixed(2)}</span>
              </div>
            </div>
            <div class="border-2 rounded-full p-1 border-rosey-300 cursor-pointer remove-icon" data-id=${t.itemId}>
              <img src=${e(v)} alt="remove" />
            </div>
          </div>
           
        
    `}}var H=new $,E={};E=new URL("icon-order-confirmed.21c2ea07.svg",import.meta.url).toString();class w{_parentElement=document.querySelector("#modal");_data;_totalPrice=0;render(e){if(this._data=e,this._data.length>0){this._totalPrice=this._data.reduce((e,t)=>e+ +t.price*+t.number,0);let e=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}_clear(){this._parentElement.innerHTML=""}addHandlerRender(e){window.addEventListener("load",e)}addHandlerConfirm(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn-confirm"),a=r.closest("#modal"),n=r.closest("#root").querySelector("#main-container");a.classList.add("hide"),n.classList.remove("blur-bg"),e()})}_generateMarkup(){return`
        <img
        class="mb-2"
        src=${e(E)}
        alt="order confirmed"
      />
      <h1 class="text-rosey-900 font-bold text-xl">Order Confirmed</h1>
      <p class="text-rosey-300 text-sm mb-4">We hope you enjoy your food!</p>
      <div class="bg-rosey-100 h-fit w-full p-2 mb-4">

      ${this._data.map(e=>this._generateItem(e)).join("")}

       <div class="flex justify-between">
          <span class="text-rosey-500 font-medium text-sm">Order Total</span>
          <span class="text-rosey-900 font-bold text-base">$${this._totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <button class="btn-order btn-confirm">Start New Order</button>





    `}_generateItem(e){return`
        <div
          class="flex justify-between items-center mb-4 border-b-2 border-rosey-300 p-2"
        >
          <div class="flex gap-2">
            <img src=${e.image} alt=${e.name} class="w-10 h-10" />
            <div>
              <h2 class="text-rosey-900 font-medium text-sm">${e.name}</h2>
              <div>
                <span class="text-primary-red font-medium text-sm mr-2"
                  >${e.number}x</span
                >
                <span class="text-rosey-400 text-sm mr-1">
                  <span class="text-sm">@</span>
                  <span>$${(+e.price).toFixed(2)}</span>
                </span>
              </div>
            </div>
          </div>
          <span class="text-rosey-500 font-semibold text-sm">$${(+e.number*+e.price).toFixed(2)} </span>
        </div>
    `}}var S=new w;const R=async function(){try{_.render(i.desserts)}catch(e){console.log(e)}},L=async function(){try{console.log("cart reloaded"),H.render(i.cart)}catch(e){console.log(e)}},I=async function(e){try{if(i.cart.length>0&&i.cart.find(t=>t.name===e.name)){console.log("true");return}await s(e),o(e),H.render(i.cart)}catch(e){console.log(e)}},C=async function(e){try{if(i.cart.length>0){let t=i.cart.find(t=>t.name===e);t&&(m(t),await s(t),H.render(i.cart))}}catch(e){console.log(e)}},k=async function(e){try{if(i.cart.length>0){let t=i.cart.find(t=>t.name===e);if(!t)return;await d(t),u(t),0===t.number&&p(t.itemId),_.render(i.desserts),H.render(i.cart)}}catch(e){console.log(e)}},j=async function(e){try{p(e),l(e),_.render(i.desserts),H.render(i.cart)}catch(e){console.log(e)}},A=function(){S.render(i.cart)},F=async function(){try{i.cart=[],c(),_.render(i.desserts),H.render(i.cart)}catch(e){console.log(e)}};_.addHandlerRender(R),_.addHandlerAddToCart(I),_.addHandlerIncrement(C),_.addHandlerDecrement(k,j),H.addHandlerRender(L),H.addHandlerConfirmOrder(A),H.addHanlderRemoveItem(function(e){p(e),l(e),console.log(i.desserts),_.render(i.desserts),H.render(i.cart)}),S.addHandlerRender(A),S.addHandlerConfirm(F);
//# sourceMappingURL=index.83fb5422.js.map
