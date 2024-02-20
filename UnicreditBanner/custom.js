function addUnicreditBanner() {
    var productFrontPrice = document.querySelector("#product .price-current .price-text");

    if (productFrontPrice) {
      var priceToInt = productFrontPrice.textContent.replace(/\s/g, "");
      var productPrice = parseFloat(priceToInt);
      if (productPrice > 150) {
        var conversionTab = document.querySelector("#product .block--description");
        if (conversionTab) {
          var ulElement = conversionTab.getElementsByTagName("div")[0];
          var newNode = document.createElement("div");
          newNode.classList.add("unicredit-banner");

          newNode.innerHTML =
            '<a href="https://www.decathlon.bg/content/23-na-izplashtane" target="_blank">' +
            '<img class="unicredit-img" src="https://contents.mediadecathlon.com/s1009989/k$6996b8090514f87482b190d9d9dfe525/unicreditbanner.jpg">' +
            "</a>";
          ulElement.after(newNode);
        }
      }
    }
  }

  addUnicreditBanner();