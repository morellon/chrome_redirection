function openDownload() {
  $("#output div.CL2[id != 'downloadMode']").filter("[id != 'premiumComparison']").remove();
  $.post($("#free_download").attr("href"), $("#downloadMode form").serialize(),function(data){
    $("#downloadMode").replaceWith(data);
    $("#downloadMode").slideDown("slow")
  });
}

openDownload();
