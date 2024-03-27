var currentHour = new Date().getHours();
var currentDay = new Date().getDay(); // Sunday is 0, Monday is 1, and so on...
var prodPages = document.querySelector("#product");

// Check if the current time is between 00:00 and 15:00 AND it's not Saturday or Sunday
if ((currentHour >= 13 && currentHour < 15) && !(currentDay === 6 || currentDay === 0) && prodPages) {
    // Calculate remaining time until 15:00
    var now = new Date();
    var target = new Date();
    target.setHours(15, 0, 0, 0); // Set the target time to 15:00

    var timeDifference = target.getTime() - now.getTime();
    var hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
    var minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    var customTextDiv = document.createElement("div");
    customTextDiv.id = "custom-text-time-range";
    customTextDiv.innerHTML = "Поръчай до " + hoursRemaining + " час и " + minutesRemaining + " минути, за да получиш утре";

    document.getElementById("oneshop__size-selector__add-to-cart").parentNode.appendChild(customTextDiv);
}