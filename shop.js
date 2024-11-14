/*
const icons = document.querySelectorAll('.img1 .nn'); 

icons.forEach(icon => {
  icon.addEventListener('click', function() {
    icons.forEach(icon => icon.classList.remove('op')); 
    icon.classList.add('op'); 
  });
});
*/


function showDropdown() {
  const dropdown = document.getElementById('dropdown');
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block';
  } 
  else {
    dropdown.style.display = 'none';
  }
}

function ch(){
  var a = document.querySelectorAll(".img2");

  a[0].setAttribute("src","pl7.png");
  

}
function ch1(){
  var a = document.querySelectorAll(".img2");
  a[0].src="pl6.png";

}
function ch2(){
  var a = document.querySelectorAll(".img2");
  a[0].src="pl8.png";
 
}
function ch3(){
  var a = document.querySelectorAll(".img2");
  a[0].src="pl9.png";

}
function ch4(){
const icon = document.querySelector('.ii'); 

icon.classList.toggle('love'); 
}