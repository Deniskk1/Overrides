function addClearCartButton() {
    var buttonDeleteCart = document.createElement("button");
    buttonDeleteCart.innerHTML = "Изчисти количката";
  
    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-delete-all-cart");
    buttonContainer.appendChild(buttonDeleteCart);
  
    var cartButtons = document.querySelector(
      "#cart .cart-buttons .col-md-6:nth-child(2)"
    );
  
    if (cartButtons) {
      cartButtons.appendChild(buttonContainer);
  
      buttonDeleteCart.addEventListener("click", function () {
        var buttons = document.querySelectorAll(
          "#cart .product-line-grid-remove a.remove-from-cart"
        );
  
        buttons.forEach(function (btn) {
          btn.click();
        });
      });
    }
  }
    
  addClearCartButton();