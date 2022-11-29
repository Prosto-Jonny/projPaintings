const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');

        // функция фильтрации эл.(принимает тип портретов, которые надо показать)
        const typeFilter = (markType)=> {
            // сначала скрытие всех эл.
            markAll.forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('animate__animated', 'animate__fadeIn');
            });
            no.style.display = 'none';
            no.classList.remove('animate__animated', 'animate__fadeIn');
            //фильрация и показ. нужного блока(если он есть)
            if(markType) {
                markType.forEach(mark=>{
                    mark.style.display = 'block';
                    mark.classList.add('animate__animated', 'animate__fadeIn');
                });
            } else {
                no.style.display = 'block';
                no.classList.add('animate__animated', 'animate__fadeIn');
            }
        };

        btnAll.addEventListener('click', ()=>{
            typeFilter(markAll);
        });
        btnLovers.addEventListener('click', ()=>{
            typeFilter(markLovers);
        });
        btnChef.addEventListener('click', ()=>{
            typeFilter(markChef);
        });
        btnGirl.addEventListener('click', ()=>{
            typeFilter(markGirl);
        });
        btnGuy.addEventListener('click', ()=>{
            typeFilter(markGuy);
        });
        btnGrandmother.addEventListener('click', ()=>{
            typeFilter();
        });
        btnGranddad.addEventListener('click', ()=>{
            typeFilter();
        });

        //переключ. актив. класса(делегиров.)
        menu.addEventListener('click', (e)=>{
            let target = e.target;
            // "LI" обязат. так, а то не работает
            if(target && target.tagName == "LI") {
                items.forEach(btn=>btn.classList.remove('active'));
                target.classList.add('active');
            }
        });
};

export default filter;