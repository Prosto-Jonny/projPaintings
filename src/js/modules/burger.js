const burger = (burgerSelector, burgerMenu) => {
    const btn = document.querySelector(burgerSelector),
        listItems = document.querySelector(burgerMenu);
    
    listItems.style.display = 'none';

    btn.addEventListener('click', () => {
        if (listItems.style.display == 'none' && window.screen.availWidth<993) { listItems.style.display = 'block'; }
        else { listItems.style.display = 'none'; }
    });

    // если экран перевернули, то открытое меню должно скрыться
    window.addEventListener('resize', () => {
       if(window.screen.availWidth>992){listItems.style.display = 'none';} 
    });
}

export default burger;