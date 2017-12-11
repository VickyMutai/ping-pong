var pingPonged=[];
//business logic interface
//user interface logic
$(document).ready(function(){
  $("form#ping").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    pingPonged.forEach(function(number){
      $("#results").append("<li>"+inputNumber+"</li>");
    });
  });
});
