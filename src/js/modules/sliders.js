const sliders =(slides, direction, prev, next)=>{
    let slideIndex = 1;
    let paused = false;

    const items = document.querySelectorAll(slides);
        function showSlides(n) {
            if(n > items.length){slideIndex = 1;}
            if(n < 1){slideIndex = items.length;}

            items.forEach(item=>{item.classList.add('animate__animated');item.style.display="none";});
            items[slideIndex-1].style.display="block";
        }
        showSlides(slideIndex);
        function plusSlides(n) {
            showSlides(slideIndex +=n);				
        }
        try{
            const prevBtn = document.querySelector(prev),
                nextBtn = document.querySelector(next);

            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                items[slideIndex-1].classList.remove('animate__fadeInLeftBig');
                items[slideIndex-1].classList.add('animate__fadeInRightBig');
            });
            nextBtn.addEventListener('click', () => {plusSlides(1);items[slideIndex-1].classList.remove('animate__fadeInRightBig');items[slideIndex-1].classList.add('animate__fadeInLeftBig');});
        } catch(e){}
        function activateAnimation(){
            if(direction === 'vertical') {
                paused = setInterval(function(){
                    plusSlides(1);
                    items[slideIndex-1].classList.add('animate__fadeInDown');
                }, 4000);
            } else{
                paused = setInterval(function(){
                    plusSlides(1);
                    items[slideIndex-1].classList.remove('animate__fadeInLeftBig');
                    items[slideIndex-1].classList.add('animate__fadeInRightBig');
                }, 4000);
            }
        }
        activateAnimation();
        items[0].parentNode.addEventListener('mouseenter', ()=>{clearInterval(paused);});
        items[0].parentNode.addEventListener('mouseleave', ()=>{activateAnimation();});
};
export default sliders;