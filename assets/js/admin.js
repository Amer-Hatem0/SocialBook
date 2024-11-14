var productName = document.getElementById('productName')
var productPrice = document.getElementById('productPrice')
var productimage = document.getElementById('productimage')
var addpro = document.getElementById('addclick')
var data = document.getElementById('data')
var search = document.getElementById('search')
var update = document.getElementById('update')
var isnamev = false
var isPricev =false
update.style.display ='none'
var products  
if(JSON.parse(localStorage.getItem('products')) == null){
    products = []
}
else{
    products = JSON.parse(localStorage.getItem('products'))
}


display()
checkin()
addpro.onclick = function (e) {
    e.preventDefault()
    add()
    resetinput()
    display()
}
//add product 
function add() {
    var product = {
       productimage: productimage.value,
        productName: productName.value,
        productPrice: productPrice.value,
      
    }
    products.push(product)
    
    localStorage.setItem('products', JSON.stringify(products))
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'product added successfully',
        showConfirmButton: false,
        timer: 1500
    })


}
//reset
function resetinput() {
      productName.value =''
        productPrice.value =''
        productimage.value =''
}
 //read
 function display(){
    var res =``
    for(var i=0;i<products.length ; i++){
        
        res +=`
        <tr>
        <td> ${i+1}</td>      
        <td>  <img src="${products[i].productimage}" alt=""> </td>
        
        <td> ${products[i].productName}  </td>
        <td> ${products[i].productPrice}</td>

        <td> 
        <button class="btn btn-info" onclick="getproduct(${i})">Update</button></td>
        <td>
        <button class="btn btn-danger" onclick="deleteproduct(${i})">Delete</button></td>
       </tr>
        `
     
   
    }
    data.innerHTML = res
 }

 //delete all 
 document.getElementById('deleteBtn').onclick = function(){
    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text:"You won't be able to revert this!",
        showCancelButton: true,
        ConfirmButtonColor: '#3085d6',
        CancelButtonColor: '#d33',
        ConfirmButtonText: 'Yes,delete it!'
       
    }).then((res) =>{
        if(res.isConfirmed){
            products =[]
             localStorage.setItem('products', JSON.stringify(products))
            data.innerHTML = ''
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
 }
  //delete index 
 function deleteproduct(index){
    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text:"You won't be able to revert this!",
        showCancelButton: true,
        ConfirmButtonColor: '#3085d6',
        CancelButtonColor: '#d33',
        ConfirmButtonText: 'Yes,delete it!'
      
    }).then((res) =>{
        if(res.isConfirmed){
            products.splice(index,1)
             localStorage.setItem('products', JSON.stringify(products))
            display()  
             Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
 }
 //search
 search.onkeyup = function(){
    var res = ``
    for(var i=0;i<products.length ; i++){
        if(products[i].productName.toLowerCase().includes(search.value.toLowerCase())){
          res +=`
        <tr>
        <td> ${i+1}</td>      
        <td> ${products[i].productimage}</td>
        <td> ${products[i].productName}</td>
        <td> ${products[i].productPrice}</td>

        <td> 
        <button class="btn btn-info" onclick="getproduct(${i})">Update</button></td>
        <td>
        <button class="btn btn-danger" onclick="deleteproduct(${i})">Delete</button></td>
       </tr>
        `  
        }
        
   
    data.innerHTML = res
 }}
 //updata
 var currentIndex
 function getproduct(index) {
    currentIndex= index
    var product = products[index]
      productimage.value = product.productimage 
    productName.value = product.productName 
    productPrice.value = product.productPrice 
    update.style.display = 'inline'
    addpro.style.display = 'none'
 }

 update.onclick =function(e){
    e.preventDefault()
    updateproduct()
    display()
    update.style.display = 'none'
    addpro.style.display = 'inline'
    resetinput()
 }
 function updateproduct(){
    var product = {
        productimage: productimage.value,
        productName: productName.value,
        productPrice: productPrice.value,
    }
    var pname = products[currentIndex].productName
    products[currentIndex].productimage = product.productimage
    products[currentIndex].productName = product.productName
    products[currentIndex].productPrice = product.productPrice
    localStorage.setItem('products',JSON.stringify(products))
    Swal.fire({
        icon: 'success',
        title: `${pname} updated successfully`,
        text:"You won't be able to revert this!",
        showConfirmButton: false,
      timer: 1000
      
    })
 }

 function checkin(){
    if(isnamev){
        addclick.removeAttribute('disabled')
    }
    else{
        addclick.setAttribute('disabled','disabled')
    }
 }



document.getElementById('nameAlert').style.display ='none'
 productName.onkeyup = function(){
    document.getElementById('nameAlert').style.display ='none'
    var pattern = /^[A-Z][a-z]{2,10}$/
    if(pattern.test(productName.value))
    {     document.getElementById('nameAlert').style.display ='none'
        isnamev =true
        if(productName.classList.contains('is-invalid'))
        {
            productName.classList.replace('is-invalid','is-valid')
        }
        productName.classList.add('is-valid')
      
    }else{
        document.getElementById('nameAlert').style.display ='block'
          isnamev = false
        if(productName.classList.contains('is-valid'))
        {
            productName.classList.replace('is-valid','is-invalid')
        }
        productName.classList.add('is-invalid')
      
    }
    checkin()
 }
 
 document.getElementById('pAlert').style.display ='none'
 productPrice.onkeyup = function(){
    document.getElementById('pAlert').style.display ='none'
    var pattern = /^[0-9]{2,5}$/
    if(pattern.test(productPrice.value))
    {       document.getElementById('pAlert').style.display ='none'
        isPricev =true
        if(productPrice.classList.contains('is-invalid'))
        {
            productPrice.classList.replace('is-invalid','is-valid')
        }
        productPrice.classList.add('is-valid')
      
    }else{
        document.getElementById('pAlert').style.display ='block'
     
          isPricev = false
        if(productPrice.classList.contains('is-valid'))
        {
            productPrice.classList.replace('is-valid','is-invalid')
        }
        productPrice.classList.add('is-invalid')
      
    }
    checkin()
 }