function validation() {
  var firstName = document.forms["myForm"]["First Name"];
  var lastName = document.forms["myForm"]["Last Name"];
  if (isNaN(firstName.value)) {
    return true;
  } else {
    alert("First Name cannot have numbers");
    return false;
  }
  if (isNaN(lastName.value)) {
    return true;
  } else {
    alert("Last Name cannot have numbers");
    return false;
  }

}

