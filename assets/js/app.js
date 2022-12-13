let mobile = document.querySelector('.mobile');
document.querySelector('.burger_menu').addEventListener('click',function() {
    mobile.classList.toggle("open");
});

var menu = document.getElementById("menu");
var li = menu.querySelectorAll("li");
console.log(li);
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}