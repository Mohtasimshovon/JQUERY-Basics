/*$("#b").click(function(){
   // $("#d").show(2000).hide(2000);
   $("#d").fadeIn(2000).fadeOut(2000,);
   $("#d").fadeTo(2000,0.6);
}) */
$("#b").click(function(){
    $("#d").animate({opacity:"0.5",height:"400px"},2000);//can use only numeric value in JSON
 })
