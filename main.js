$(document).ready(function(){

  /* var menuOpened = $(".header-right > a");

  var menuClosed = $(".hamburger-menu  a.close");

  var listaMenu = $(".hamburger-menu"); */

  
  /* richiamo per le funzioni direttamente le classi del css */

  $(".header-right > a").click(function(){
    $(".hamburger-menu").show();
  })

  $(".hamburger-menu  a.close").click(function(){
    $(".hamburger-menu").hide();
  })

})
