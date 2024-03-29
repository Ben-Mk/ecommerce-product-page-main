const subBtn = document.querySelector(".sub");
const addBtn = document.querySelector(".add");
const quantity = document.querySelector(".product-quantity");
const cartIcon = document.querySelector(".cart-icon");
const cartCard = document.querySelector(".cart-card");
const cartContainer = document.querySelector(".cart-container");
const cartEmpty = document.querySelector(".cart-empty");
const checkOutBtn = document.querySelector(".checkout");
const addCartBtn = document.querySelector(".product-cart-btn");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navMenuIcon = document.querySelector("#nav-menu-icon");
const deleteBtn = document.querySelector(".delect-icon");
const navMenu = document.querySelector(".nav-list");
const previousBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
let mainPic = document.querySelector("#main-pic");
let cartQuantity = document.querySelector(".cart-item-quantity");
let cartTotal = document.querySelector(".cart-item-total");

let picNum = 1;
previousBtn.addEventListener("click", () => {
  if (picNum > 1) {
    picNum--;
    mainPic.src = `images/image-product-${picNum}.jpg`;
  }
});

nextBtn.addEventListener("click", () => {
  if (picNum < 4) {
    picNum++;
    mainPic.src = `images/image-product-${picNum}.jpg`;
  }
});
console.log(navMenuIcon);
navMenuBtn.addEventListener("click", () => {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navMenuIcon.src = "images/icon-menu.svg";
  } else {
    navMenu.classList.add("active");
    navMenuIcon.src = "images/icon-close.svg";
  }
});
cartIcon.addEventListener("click", () => {
  cartCard.classList.toggle("display");
});

function changePic(newSource) {
  mainPic.src = newSource;
}

let counter = 0;
let changePrice = 0;
if (counter == 0) {
  cartContainer.classList.add("disappear");
  cartContainer.classList.remove("appear");
  checkOutBtn.style.display = "none";
}

addBtn.addEventListener("click", () => {
  if (counter <= 9) {
    counter++;
    changePrice += 12500;
  } else {
    return;
  }
  quantity.innerText = counter;
  cartQuantity.innerText = counter;
  cartTotal.innerText = ((12500 * counter) / 100).toFixed(2);
});

subBtn.addEventListener("click", () => {
  if (counter >= 1) {
    counter--;
    changePrice -= 12500;
    if (counter == 0) {
      cartContainer.classList.add("disappear");
      cartContainer.classList.remove("appear");
      cartEmpty.style.display = "block";
      checkOutBtn.style.display = "none";
    }
  } else {
    return;
  }
  quantity.innerText = counter;
  cartQuantity.innerText = counter;
  cartTotal.innerText = (changePrice / 100).toFixed(2);
});

addCartBtn.addEventListener("click", () => {
  if (counter > 0) {
    cartContainer.classList.remove("disappear");
    cartContainer.classList.add("appear");
    cartEmpty.style.display = "none";
    checkOutBtn.style.display = "block";
  }
});

deleteBtn.addEventListener("click", () => {
  cartContainer.classList.add("disappear");
  cartContainer.classList.remove("appear");
  cartEmpty.style.display = "block";
  checkOutBtn.style.display = "none";
  counter = 0;
  quantity.innerText = counter;
});
