//business logic interface
//user interface logic
$(document).ready(function(){
  $("form#ping").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    $("#result ul").append('<li>'+comment+'</li>');
  });
});
