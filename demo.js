// Todo nuestro código estará dentro de la función "ready", que nos asegura que el DOM está cargado, que el navegador ha leído todo el html y está empezar a operar.

$(document).ready(function() {
      $("#menu ul li:first").addClass("selected");
      $("section article:nth-child(2)").addClass("middle");
      $(".list-item:odd").addClass("highlighted");
      $(".list-item:last").css({
        "border": "1px solid #eee"
      });
      $("#form-container form input").focus(function() {
        $(this).css("border", "3px solid #43a3e6");
      }).blur(function() {
        $(this).css("border", "");
      });
  });

    // alert("DOM is Loaded");
