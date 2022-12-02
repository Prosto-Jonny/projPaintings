import { postData } from "../services/requests";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]'),
        message = {
            loading: 'Загрузка...',
            succes: 'Спасибо! Скоро мы с вами свяжемся.',
            error: 'Что-то пошло не так.',
            spinner: 'assets/img/spinner.gif',
            ok: 'assets/img/ok.png',
            fail: 'assets/img/fail.png'
        },
        clearAllInputs = () => {
            inputs.forEach(item => {
                item.value = '';
            });
            upload.forEach(item =>{
                item.previousElementSibling.textContent = "Файл не найден";
            });
        };
    const path = {
        designer: 'http://localhost:3000/request',
        question: 'http://localhost:3000/questions'
    };

    upload.forEach(item =>{
        item.addEventListener('input', ()=>{
            let dots;
            const fileName = item.files[0].name.split('.');
            fileName[0].length > 6 ? dots = "..." : dots = '.';
            const name = fileName[0].substring(0,6) + dots + fileName[1];
            item.previousElementSibling.textContent = name;
        });
    });
    
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);
            item.classList.add('animate__animated', 'animate__fadeOutUp');
            setTimeout(()=>{
                item.style.display = "none";
            }, 400);
            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animate__animated', 'animate__fadeInUp');
            statusMessage.appendChild(statusImg);
            let textStatus = document.createElement('div');
            textStatus.textContent = message.loading;
            statusMessage.appendChild(textStatus);
            const formData = new FormData(item);
            for (let key in state) {
                formData.append(key, state[key]);
            }
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textStatus.textContent = message.succes;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textStatus.textContent = message.error;
                })
                .finally(() => {
                    clearAllInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('animate__fadeOutUp');
                        item.classList.add('animate__fadeInUp');
                    }, 5000);
                });
        });
    });
};

export default forms;