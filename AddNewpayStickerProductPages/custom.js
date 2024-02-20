function addNewPaySticker() {
    var productFrontPrice = document.querySelector(
      "#product .price-current .price-text"
    );

    if (productFrontPrice) {
      var priceText = productFrontPrice.textContent.replace(/\s/g, "");
      var productPrice = parseFloat(priceText);

      if (productPrice > 20 && productPrice < 2000) {
        var priceRow = document.querySelector("#product .product-info_reviews");

        if (priceRow) {
          var newPayBanner = document.createElement("div");
          newPayBanner.classList.add("newpay-banner");

          var newPayImg = document.createElement("img");
          newPayImg.classList.add("newpay-img");
          newPayImg.src =
            "https://contents.mediadecathlon.com/s992409/k$1042d7eaa8945fd401c3873c35d439be/newpay.png";
          newPayImg.alt = "Вземи сега, плати по-късно";

          var newPayText = document.createElement("p");
          newPayText.classList.add("newpay-text");
          newPayText.textContent = "Вземи сега, плати по-късно";

          newPayBanner.appendChild(newPayImg);
          newPayBanner.appendChild(newPayText);

          priceRow.parentNode.insertBefore(newPayBanner, priceRow.nextSibling);
        }
      }
    }
  }

  setTimeout(function() {
    addNewPaySticker();
  }, 1000);