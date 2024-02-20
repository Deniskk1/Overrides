function addInfoDiv() {
    if (document.body.id === "cart") {
      var infoDiv = '<div style="background: #FFEFE6;color: #FF600A;padding: 16px;">' +
                    '<i style="margin-right: 5px" class="fa fa-info-circle" aria-hidden="true"></i>' +
                    '<b>Побързай!</b> Продуктите в количката ти може да се изчерпат.' +
                    '</div>';
  
      var div = document.createElement("div");
      div.innerHTML = infoDiv;
  
      var elements = document.getElementsByClassName("card-block");
      var firstElement = elements[0];
  
      if (firstElement) {
        firstElement.style.borderBottom = "0px solid white";
        firstElement.after(div);
      }
    }
  }
  
  addInfoDiv();