function addNewSectionAboveDeliveryStep() {
    var checkoutDeliveryStep = document.querySelector(
      "#checkout #checkout-delivery-step"
    );

    if (checkoutDeliveryStep) {
      var createDivEl = checkoutDeliveryStep.getElementsByTagName("div")[0];
      var newDivEL = document.createElement("div");
      newDivEL.className = "split-order";

      newDivEL.innerHTML = 
        '<button id="btn-delivery-more-info">?</button>' +
        '<div id="myModal" class="modal-delivery">' +
        '<div class="modal-delivery-content">' +
        '<div class="main-one">' +
        '<div class="beggining-of-the-code">' +
        '<div class="center-text-and-close">' +
        '<span class="questions">Често задавани въпроси</span> <span class="close-delivery-step">&times;</span>' +
        '</div>' +
        '<div class="questions-common">' +
        '<div id="accordion">' +
        '<div class="card">' +
        '<div class="card-header">' +
        '<i class="fa-solid fa-caret-down"></i>' +
        '<a class="card-link" data-toggle="collapse" href="#collapseOne">' +
        'Защо поръчката ми се разделя на няколко доставки?' +
        '</a>' +
        '</div>' +
        '<div id="collapseOne" class="collapse" >' +
        '<div class="card-body">' +
        'Възможно е поръчката да се раздели на няколко пратки в зависимост от това къде са налични избраните продукти. Тежки и обемни артикули винаги се изпращат в отделна пратка, за да гарантираме по-надеждна доставка. Ако поръчката не отговаря на условията за безплатна доставка, за всяка от пратките ще се начисли съответната цена на доставка.' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="card">' +
        '<div class="card-header">' +
        '<i class="fa-solid fa-caret-down"></i>' +
        '<a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">' +
        'Защо не виждам всички методи на доставка?' +
        '</a>' +
        '</div>' +
        '<div id="collapseTwo" class="collapse" >' +
        '<div class="card-body">' +
        'Методите на доставка се предлагат в зависимост от твоята локация и къде е наличен избраният продукт. Съществуват следните възможности, поради които един или няколко метода на доставка не се визуалзират:' +
        '<ul>' +
        '<li>Click&Collect – продуктът е наличен само в магазин, намиращ се далеч от вашия адрес за доставка и/или към момента няма наличност</li>' +
        '<li>Click&Collect е единствената опция – при специфични продукти, които са забранени по закон за транспортиране и доставка от куриер (пример: аерозоли, газови бутилки и други).</li>' +
        '<li>До офис на куриер – при обемни и тежки продукти опцията за доставка до офис на куриер не е възможна (за размери над 60 x 35 x 37 см и/или тегло над 32 кг).</li>' +
        '<li>Експресна доставка – опцията към момента е налична само в София и Пловдив.</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="card">' +
        '<div class="card-header">' +
        '<i class="fa-solid fa-caret-down"></i>' +
        '<a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">' +
        'Защо не виждам всички офиси на куриери?' +
        '</a>' +
        '</div>' +
        '<div id="collapseThree" class="collapse" >' +
        '<div class="card-body">' +
        'С цел максимално удобство системата ни визуализира най-близките офиси на куриери спрямо адреса за доставка, който си задал в своя профил. Ако желаеш поръчка да бъде доставена до офис в друг град или квартал, е нужно да въведеш точния адрес на доставка и пощенски код.' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

      if (createDivEl) {
        createDivEl.before(newDivEL);
      }
    }

    var modalDeliveryStep = document.getElementById("myModal");
    var btnDeliveryStep = document.getElementById("btn-delivery-more-info");
    var spanDeliveryStep = document.getElementsByClassName(
      "close-delivery-step"
    )[0];

    if (checkoutDeliveryStep) {
      if (btnDeliveryStep) {
        btnDeliveryStep.onclick = function () {
          modalDeliveryStep.style.display = "block";
        };
      }
      if (spanDeliveryStep) {
        spanDeliveryStep.onclick = function () {
          modalDeliveryStep.style.display = "none";
        };
      }

      window.onclick = function (event) {
        if (event.target == modalDeliveryStep) {
          modalDeliveryStep.style.display = "none";
        }
      };
    }
  }

  addNewSectionAboveDeliveryStep();