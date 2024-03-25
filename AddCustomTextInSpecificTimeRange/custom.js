var currentHour = new Date().getHours();
var currentDay = new Date().getDay(); // Sunday is 0, Monday is 1, and so on...
var prodPages = document.querySelector("#product");

// Check if the current time is between 00:00 and 15:00 AND it's not Saturday or Sunday
if ((currentHour >= 0 && currentHour < 15) && !(currentDay === 6 || currentDay === 0) && prodPages) {
    var customTextDiv = document.createElement("div");
    customTextDiv.id = "custom-text-time-range";
    customTextDiv.textContent = "Поръчай до 30 мин и получи утре";

    document.getElementById("oneshop__size-selector__add-to-cart").parentNode.appendChild(customTextDiv);
}