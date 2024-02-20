function initAvailabilityUpdate() {
    var DANGER_COLOR = "#e20c18";
    var PRIMARY_COLOR = "#0082c3";
    var WARNING_COLOR = "#bcb02c";
  
    var observers = [];
    var storeAvailabilities = document.querySelectorAll('span[id*="store-"]');
  
    var addSpinner = function (node) {
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-circle-o-notch", "fa-spin", "fa-1x");
      icon.style.marginLeft = "0.5em";
      node.innerText = ""; // Clear the content of the node
      node.appendChild(icon);
    };
  
    storeAvailabilities.forEach(function (node) {
      addSpinner(node);
  
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (
            mutation.type === "childList" &&
            mutation.addedNodes.length === 1 &&
            mutation.addedNodes[0].nodeName === "#text"
          ) {
            addSpinner(node);
          }
        });
      });
  
      var config = { attributes: true, childList: true, characterData: true };
      observer.observe(node, config);
      observers.push(observer);
    });
  
    setInterval(function () {
      var availabilityEvents = window.dataLayer.filter(
        function (e) { return e.event === "product page view store availability"; }
      );

      var availabilityEvent = availabilityEvents[availabilityEvents.length - 1];
  
      if (availabilityEvent) {
        observers.forEach(function (obs) { return obs.disconnect(); });
  
        var stores = availabilityEvent.products.articles[0].availability.stores;
  
        if (stores.length > 0) {
          stores.forEach(function (store) {
            var availabilityText = document.getElementById("store-" + store.id);
  
            if (store.availability === 2 || store.availability === 3) {
              availabilityText.innerText = "Ограничена наличност (" +
                (store.availability - 1) + " бр.)";
  
              availabilityText.style.color = WARNING_COLOR;
            }
  
            if (store.availability > 3) {
              availabilityText.innerText = "В наличност (" +
                (store.availability - 1) + " бр.)";
  
              availabilityText.style.color = PRIMARY_COLOR;
            }
  
            if (
              !store.availability ||
              store.availability === 0 ||
              store.availability === 1
            ) {
              availabilityText.innerText = "Няма наличност";
              availabilityText.style.color = DANGER_COLOR;
            }
          });
        }
      }
    }, 500);
  }
  
    if (document.body.id === "product") {
      var storeAvailabilities = document.querySelectorAll('span[id*="store-"]');
      storeAvailabilities.forEach(function (node) {
        node.innerText = ""; // Clear the content of the node initially
      });
      initAvailabilityUpdate();
    }
