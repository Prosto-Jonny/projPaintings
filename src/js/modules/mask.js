const mask = (selector)=> {

    let setCursorPosition = (pos, elem)=>{
        elem.focus();
        
        if(elem.setSelectionRange){
            elem.setSelectionRange(pos, pos);
        } else if(elem.createTextRange){
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function mask(event){
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            // не цифры удалить(dev - статич. на основе матрицы, val - динамич., что ввели)
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');
        // чтоб не удалялась +7
        if(def.length >= val.length) {val = def;}

        this.value = matrix.replace(/./g, function(a){
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        // blur(вышел из фокуса input очистил.)
        if(event.type === 'blur'){
            if(this.value.length == 2){this.value = '';}
        } else{
            setCursorPosition(this.value.length, this);
        }
    }
    // навеш. на inputы
    let inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
        input.addEventListener('input', mask);
        input.addEventListener('focus', mask);
        input.addEventListener('blur', mask);
    })
};

export default mask;