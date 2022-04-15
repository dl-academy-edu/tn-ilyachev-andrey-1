var bannerBtn =document.querySelector('.banner-js');
var popup=document.querySelector('.popup');
var modal_close=document.querySelector('.modal-close');
var input=popup.querySelector('input');
console.log(bannerBtn);
console.log(popup);
console.log(modal_close);
console.log(input);
bannerBtn.addEventListener("click",function(){
    popup.classList.add('popup-open');
    input.focus();

});
modal_close.addEventListener("click",function(){
    popup.classList.remove('popup-open');
    bannerBtn.focus();
});
window.addEventListener("keydown",function(event){
    console.log(event.code);
    if (event.code==="Escape"){
        popup.classList.remove('popup-open');
        bannerBtn.focus();
    }
})