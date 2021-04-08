let colorOfText = document.getElementById("initial_color");
document.getElementById("initial_color")
        .addEventListener("click", function() {
  colorOfText.style.color = "inherit";
});
document.getElementById("red_square")
        .addEventListener("click", function(){
  colorOfText.style.color = "red";
});
document.getElementById("green_square")
        .addEventListener("click", function(){
  colorOfText.style.color = "green";
});
// pour retrouver la couleur initiale
document.getElementById("blue_square")
        .addEventListener("click", function(){
  colorOfText.style.color = "blue";
});
