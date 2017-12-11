var pingPonged=[];
//business logic interface
function pingPong(number){
for (var num=1;num<=number; num++ ){
  if (num %15 === 0){
    pingPonged.push("pingpong");
  } else if(num % 3 === 0){
    pingPonged.push("ping");
  } else if(num % 5 === 0){
    pingPonged.push("pong");
  }else{
    pingPonged.push(num);
  }
}
}
//user interface logic
$(document).ready(function(){
  $("form#ping").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    pingPong(number);
    pingPonged.forEach(function(number){
      $("#results").append("<li>"+number+"</li>");
    });
  });
});
