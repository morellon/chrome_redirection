function redirect() {
  var url = window.location;
  $("form[action='" + url + "'] input[type='submit']").click();
}

redirect();
