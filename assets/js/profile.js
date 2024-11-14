var loading = document.querySelector('.loading')

document.body.style.overflow = 'hidden'
window.addEventListener('load', function(){
   setTimeout(function(){
    loading.style.opacity = '0'
    loading.style.visibility = 'hidden'
    loading.style.transition = '1s'
    document.body.style.overflow = 'auto'
   }, 2000)
})