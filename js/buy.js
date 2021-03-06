var buy = document.querySelectorAll(".modal-block-buy"),
  i;

var product = document.querySelector(".modal-basket");
var buyClose = product.querySelector(".modal-basket-close");

for (var i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function(evt) {
    evt.preventDefault(evt);
    product.classList.add("modal-show");
  })
}

buyClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  product.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (product.classList.contains("modal-show")) {
      product.classList.remove("modal-show");
      product.classList.remove("modal-error");
    }
  }
});
