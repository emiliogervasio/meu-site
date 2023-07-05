
var navbar=document.querySelector('.navbar'); 
document.querySelector('#btn-menu').onclick  = () =>{
    navbar.classList.toggle('active');
    
    busca.classList.remove('active');
    cartItem.classList.remove('active');
}
var  busca= document.querySelector('.search-form'); 
    document.querySelector('#search-outline').onclick  = () =>{
    busca.classList.toggle('active');
    navbar.classList.remove('active');
    
    cartItem.classList.remove('active');
}
var  cartItem= document.querySelector('.cart-items-container'); 
    document.querySelector('#cart-outline').onclick  = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    busca.classList.remove('active');
    
}
window.onscroll = () => {
    navbar.classList.remove('active');
    busca.classList.remove('active');
    cartItem.classList.remove('active');
}