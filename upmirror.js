function redirect() {
  if($("frame").length > 1) {
    window.location.href = $("frame")[1].src;
  } 
  else {
    window.location.href = $("h1 p a").attr("href");
  }
}

redirect();
