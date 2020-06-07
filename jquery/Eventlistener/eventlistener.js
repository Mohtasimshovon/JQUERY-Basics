/*using js
document.querySelector("button").addEventListener("click",function(){
 document.querySelector("h1").innerHTML="you have clicked";
}) */
/*using jquery
$("button").click(function(){
  $("h1").toggleClass("style1")
  $("h1").text("You have clicked")
}) */
//using multiple class
$(".b").click(function(){
   var value=this.innerHTML;
   $("h1").text(value+"is clicked")

})