$(document).ready(function () {
  $.fn.myFunction = function () {
    alert($('#search').val());
  }

  $("#btn").click(function f() {
    $.fn.myFunction();
  });
});