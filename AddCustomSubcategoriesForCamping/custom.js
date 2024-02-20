function addCampingCategories() {
  var campingCategory = document.querySelector(
    ".category-id-4621 .block__subcategories--group"
  );

  if (campingCategory) {
    var createCampCategory = campingCategory.querySelector("div");
    var newCampingCategories = document.createElement("div");

    newCampingCategories.innerHTML =
      '<div class="US_container">' +
      '<a href="/4636-palatki-i-zasloni">' +
      '<div class="US_item">' +
      '<div class="US_content">' +
      '<img src="https://contents.mediadecathlon.com/p1965987/k$7955b9a14e9880c8ea2b343dbba584a7/stan-2-seconds-na-kempovanie-pre-3-osoby-modry.jpg?f=0x50&format=auto&quality=100">' +
      '</div>' +
      '<div class="US_content">' +
      '<p>Палатки и заслони</p>' +
      '</div>' +
      '</div>' +
      '</a>' +
      '<a href="/4622-kamping-mebeli">' +
      '<div class="US_item">' +
      '<div class="US_content">' +
      '<img src="https://contents.mediadecathlon.com/p1757596/k$5f6afde636ebc761b055f38fb88e1db0/skladaci-kempingovy-stol-a-4-sedacky-pre-4-az-6-osob.jpg?f=0x50&format=auto&quality=100">' +
      '</div>' +
      '<div class="US_content">' +
      '<p>Къмпинг мебели</p>' +
      '</div>' +
      '</div>' +
      '</a>' +
      '<a href="/4628-kamping-oborudvane">' +
      '<div class="US_item">' +
      '<div class="US_content">' +
      '<img src="https://contents.mediadecathlon.com/p1777096/k$d918544a4e8e91b5178a22785c0116eb/nepremokavy-a-priedusny-obal-na-spaci-vak-trekingovy-sivo-oranzovy.jpg?f=0x50&format=auto&quality=100">' +
      '</div>' +
      '<div class="US_content">' +
      '<p>Къмпинг оборудване</p>' +
      '</div>' +
      '</div>' +
      '</a>' +
      '<a href="/content/104-catalog-camping">' +
      '<div class="US_item catalog-camping">' +
      '<div class="US_content">' +
      '<img class="catalog-img" src="https://contents.mediadecathlon.com/s1001868/k$beca8249271211f40d9ab1ea25bb4b67/catalog.png">' +
      '</div>' +
      '<div class="US_content">' +
      '<p class="catalog-txt">Каталог</p>' +
      '</div>' +
      '</div>' +
      '</a>' +
      '</div>';

    createCampCategory.before(newCampingCategories);
  }
}

addCampingCategories();