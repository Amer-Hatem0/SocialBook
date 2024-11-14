





const icons = document.querySelectorAll('.imgin1'); 

icons.forEach(icon => {
  icon.addEventListener('click', function() {
    icons.forEach(icon => icon.classList.remove('op')); 
    icon.classList.add('op'); 
  });
});

function showDropdown() {
  const dropdown = document.getElementById('dropdown');
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block';
  } 
  else {
    dropdown.style.display = 'none';
  }
}
function showDropdown2() {
    const dropdown = document.getElementById('dropdown2');
    if (dropdown.style.display === 'none') {
      dropdown.style.display = 'block';
    } 
    else {
      dropdown.style.display = 'none';
    }
  }

$('.offcanva-btn').on('click', function () {
    $(this).toggleClass('active')
})


$('.message-btn').on('click', function () {
    $('.chat-contacts').toggleClass('active')
    $('.main-content').toggleClass('active-chat')

})

let navbarHeight = $('.navbar').outerHeight();
$('.sidebar').css({ 'top': navbarHeight + 'px' })
$('.chat-contacts').css({ 'top': navbarHeight + 'px' })
$('.main-content').css({ 'padding-top': navbarHeight + 'px' })

let windowWidth = $(window).width();
let sidebarWidth = $('.sidebar').width();

if (windowWidth >= 1600) {
    $('.main-content').css({ 'padding-right': sidebarWidth + 'px', 'padding-left': sidebarWidth + 'px' })
}
else if (windowWidth >= 992 && windowWidth < 1600) {
    $('.main-content').css({ 'padding-right': 0, 'padding-left': sidebarWidth + 'px' })

}
else if (windowWidth < 992) {
    $('.main-content').css({ 'padding-right': 0, 'padding-left': 0 })

}


$(window).on('resize', function () {
    let windowWidth = $(window).width();

    if (windowWidth >= 1600) {
        $('.main-content').css({ 'padding-right': sidebarWidth + 'px', 'padding-left': sidebarWidth + 'px' })
    }
    else if (windowWidth >= 992 && windowWidth < 1600) {
        $('.main-content').css({ 'padding-right': 0, 'padding-left': sidebarWidth + 'px' })

    }
    else if (windowWidth < 992) {
        $('.main-content').css({ 'padding-right': 0, 'padding-left': 0 })

    }
})



$(".owl-carousel").owlCarousel({
    margin: 10
});




$(document).ready(function () {

    $("#owl-demo").owlCarousel({

        items: 10, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0;
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });

});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dott");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    newFunction()

    function newFunction() {
        
        slides[slideIndex - 1].style.display = "block"
        dots[slideIndex - 1].className += " active"
    }
}





