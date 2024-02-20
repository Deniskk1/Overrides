function setTermsAndConditions() {
    var termsCheckbox = document.querySelector(
      ".float-xs-left > .custom-checkbox > input"
    );
    if (termsCheckbox) {
      termsCheckbox.checked = true;
  
      var termsLabel = document.querySelector(
        "#checkout-payment-step-check .js-terms"
      );
      termsLabel.innerHTML =
        "С натискането на бутона 'Завършване на поръчката' се съгласявате с oбщите условия, които можете да видите";
      termsLabel.insertAdjacentHTML(
        "afterend",
        '&nbsp<a class="button-terms" href="https://www.decathlon.bg/content/40-obshti-usloviya-za-prodazhba">тук</a>'
      );
    }
  }
    
  setTermsAndConditions();