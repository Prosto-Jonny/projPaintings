import { postData } from "../services/requests";

const forms = () => {
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
            // очистка названий загруженных файлов
            upload.forEach(item =>{
                item.previousElementSibling.textContent = "Файл не найден";
            });
        };

    // перемен. с адресом отправки данных(консультация и файлы на разные)
    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    upload.forEach(item =>{
        item.addEventListener('input', ()=>{
            //динамич. отображ. загруж. файла и обрезка
            let dots;
            const fileName = item.files[0].name.split('.');
            fileName[0].length > 6 ? dots = "..." : dots = '.';
            const name = fileName[0].substring(0,6) + dots + fileName[1];
            item.previousElementSibling.textContent = name;
        });
    });
    
    // checkNumInput('input[name="user_phone"]');
    
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            // добавка статуса отправки данных
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);
            // скрытие формы(анимац. делает прозрач, потом убирается)
            item.classList.add('animated', 'fadeOutUp');
            setTimeout(()=>{
                item.style.display = "none";
            }, 400);

            //отображ. статуса сообщ.(добав. картинку)
            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);
            //добав. текст
            let textStatus = document.createElement('div');
            textStatus.textContent = message.loading;
            statusMessage.appendChild(textStatus);

            // сбор данных из формы(исп. объект formData)
            const formData = new FormData(item);
            //перемен. для динамич. формир. пути отправки
            let api;
            // опред. по родителю куда отправлять(или статич.форма)
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            // запрос на сервер(Fetch)
            postData(api, formData)
                .then(res => {
                    // измен. изображ. и текста
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
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });
};

export default forms;