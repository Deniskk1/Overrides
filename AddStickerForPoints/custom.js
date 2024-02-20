function addCustomText(
    valuesArray,
    containerSelector,
    modelSelector,
    rowSelector
) {
    var jsModelElements = document.querySelectorAll(
        containerSelector + " " + modelSelector
    );

    jsModelElements.forEach(function (jsModelElement) {
        if (valuesArray.includes(jsModelElement.textContent.trim())) {
            var customDiv = document.createElement("div");
            customDiv.style.textAlign = "center";

            var customImageElement = document.createElement("img");
            customImageElement.src =
                "https://contents.mediadecathlon.com/s1059552/k$13a270f9496217fe9fe9b412414d9ca5/sticker%20ppoints.png";
            customImageElement.classList.add("points-sticker");

            customDiv.appendChild(customImageElement);

            var priceRowSelector = isMobileDevice() ? ".newpay-banner" : rowSelector;

            var priceRowElement = document.querySelector(
                containerSelector + " " + priceRowSelector
            );

            if (priceRowElement) {
                priceRowElement.parentNode.insertBefore(
                    customDiv,
                    priceRowElement.nextSibling
                );
            }
        }
    });
}

function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Use specific IDs instead of fetching from CSV
var specificIDs = [
    "8733572", "8496932", "8641622", "8754269", "8640779", "8738937", "8616805",
    "8619212", "8767321", "8552079", "8666590", "8497806", "8525840", "8739276",
    "8755953", "8643824", "8641696", "8766093", "8584544", "8385106", "8655649",
    "8545098", "8759370", "8734775", "8664477", "8549542", "8645590", "8648653",
    "8647293", "8753737", "8753739", "8828116", "8828117", "8647292", "8527329",
    "8787845", "8771195", "8575968", "8331658", "8810536", "8581388", "8667210",
    "8644860", "8649496", "8735043", "8317909", "8646583", "8574173", "8384958",
    "8505682"
];

// Run the script every 1 second
setTimeout(function () {
    addCustomText(
        specificIDs,
        "#product",
        ".product-info_top .js-model",
        ".product-info_reviews"
    );
}, 2000);