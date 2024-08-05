const slides=document.querySelectorAll('.slide img');
let slideIndex=0;
//
document.addEventListener('DOMContentLoaded',function(){
    slides[slideIndex].classList.add('displaySlide');
    setInterval(nextSlide,5000);
});
//
function showSlide(index){
    if(index>slides.length-1){
        slideIndex=0;
    }else if(index<0){
        slideIndex=slides.length-1;
    }
    slides.forEach(slide=>{
        slide.classList.remove('displaySlide');
    })
    slides[slideIndex].classList.add('displaySlide');
};
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}