const pictures = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);
    // замена src у картинок
    function showImg(block) {
        const img = block.querySelector('img');
        // у картинок одинаковый тип, поэтому отрез. конец строкии добав. постсуф. -1
        img.src = img.src.slice(0, -4) + '-1.png';
        // скрытие лишних элементов(р), кроме одного(хит продаж(.sizes-hit))
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

export default pictures;