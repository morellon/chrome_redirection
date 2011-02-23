Function.prototype.appendToDom = function () {
  var html = "<script>"+this.toString()+";\n"+this.name+"();</script>";
  $("body").append(html)
}

function openDownload() {
  $("div.comparison").remove();
  $('#regularBtn').click();
}

openDownload.appendToDom();
