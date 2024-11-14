var scrollToTop = document.querySelector('.scrollToTop')
var scrollTo = document.getElementById('scrollToTop')
var loading = document.querySelector('.loading')

scrollToTop.style.opacity = '0';
window.addEventListener('scroll',function(){
    if(window.scrollY >= 500){
        scrollToTop.style.opacity = '1'
    }  
    if(window.scrollY < 300){
        scrollToTop.style.opacity = '0'
    }  
})

window.addEventListener('click',function(){
window.scroll({
    top:0,
    behavior:"smooth"
})
})

document.body.style.overflow = 'hidden'
window.addEventListener('load', function(){
   setTimeout(function(){
    loading.style.opacity = '0'
    loading.style.visibility = 'hidden'
    loading.style.transition = '1s'
    document.body.style.overflow = 'auto'
   }, 2000)
})
