const calc = (size, material, option, promocode, result)=>{
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionBlock = document.querySelector(option);
    const promocodeBlock = document.querySelector(promocode);
    const resultBlock = document.querySelector(result);


    let sum = 0;

    // общ. функц., срабат. при выборе
    const calcFunc =() => {
        // мат. действия на основе value  в вёрстке(приходит строка)
        sum = Math.round((+sizeBlock.value)*(+materialBlock.value) + (+optionBlock.value));
        if(sizeBlock.value == '' || materialBlock.value == ''){resultBlock.textContent = "Пожалуйста, выберите и материал картины";}
        else if(promocodeBlock.value === 'IWANTPOPART'){resultBlock.textContent = Math.round(sum * 0.7);}
        else {resultBlock.textContent = sum;}
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);

};

export default calc;