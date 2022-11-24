const sliders =(slides, direction, prev, next)=>{
    // первонач. слайд
    let slideIndex = 1;
    // переменка для останова автомат. переключ. слайдов
    let paused = false;

    const items = document.querySelectorAll(slides);

        // функ., ответ. за отображ. слайдов
        function showSlides(n) {
            // крайние значения
            if(n > items.length){slideIndex = 1;}
            if(n < 1){slideIndex = items.length;}

            items.forEach(item=>{item.style.display="none";item.classList.add('animated');});
            items[slideIndex-1].style.display="block";
        };
        //первич. инициализ.
        showSlides(slideIndex);

        //обёртка для перемещ. слайдов
        function plusSlides(n) {
            showSlides(slideIndex +=n);				
        }

        try{
            // кнопки переключ(не везде нужны)
            const prevBtn = document.querySelector(prev),
                nextBtn = document.querySelector(next);

            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                // анимация при переключ.
                items[slideIndex-1].classList.remove('slideInLeft');
                items[slideIndex-1].classList.add('slideInRight');
            });
            nextBtn.addEventListener('click', () => {plusSlides(1);items[slideIndex-1].classList.remove('slideInRight');items[slideIndex-1].classList.add('slideInLeft');});
        } catch(e){}

        // механизм для останова автомат. переключ. слайдов при наведении на область слайдера
        function activateAnimation(){
            // указ. направление переключ. в слайдерах и вкл. автопереключ.
            if(direction === 'vertical') {
                paused = setInterval(function(){
                    plusSlides(1);
                    items[slideIndex-1].classList.add('slideInDown');
                }, 4000);
            } else{
                paused = setInterval(function(){
                    plusSlides(1);
                    items[slideIndex-1].classList.remove('slideInLeft');
                    items[slideIndex-1].classList.add('slideInRight');
                }, 4000);
            }
        };
        activateAnimation();
        items[0].parentNode.addEventListener('mouseenter', ()=>{clearInterval(paused);});
        items[0].parentNode.addEventListener('mouseleave', ()=>{activateAnimation();});
};


export default sliders;