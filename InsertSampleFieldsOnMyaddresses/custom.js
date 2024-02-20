function insertSampleFields() {
    var addressesStepSelector = "#checkout-addresses-step .form-fields";
    var myAddressesSelector = "#address .form-fields";
  
    $("<p>Пример: +359 88 999 9999</p>").insertAfter(
      addressesStepSelector + " .phone .form-control[name='phone']"
    );
    $("<p>*не са разрешени символи (!@#$%-)</p>").insertAfter(
      addressesStepSelector + " .firstname .form-control[name='firstname']"
    );
    $("<p>*не са разрешени символи (!@#$%-)</p>").insertAfter(
      addressesStepSelector + " .lastname .form-control[name='lastname']"
    );
    $("<p>Пример: ж.к Дружба, ул. Иван Иванов 5</p>").insertAfter(
      addressesStepSelector + " .form-control[name='address1']"
    );
    $("<p>Пример: блок 35, вход А</p>").insertAfter(
      addressesStepSelector + " .form-control[name='address2']"
    );
  
    $("<p style='font-size: 0.8rem'>Пример: +359 88 999 9999</p>").insertAfter(
      myAddressesSelector + " .phone .form-control[name='phone']"
    );
    $(
      "<p style='font-size: 0.8rem'>*не са разрешени символи (!@#$%-)</p>"
    ).insertAfter(
      myAddressesSelector + " .firstname .form-control[name='firstname']"
    );
    $(
      "<p style='font-size: 0.8rem'>*не са разрешени символи (!@#$%-)</p>"
    ).insertAfter(
      myAddressesSelector + " .lastname .form-control[name='lastname']"
    );
    $(
      "<p style='font-size: 0.8rem'>Пример: ж.к Дружба, ул. Иван Иванов 5</p>"
    ).insertAfter(
      myAddressesSelector + " .form-group .form-control[name='address1']"
    );
    $("<p style='font-size: 0.8rem'>Пример: блок 35, вход А</p>").insertAfter(
      myAddressesSelector + " .form-group .form-control[name='address2']"
    );
  }
  
  insertSampleFields();