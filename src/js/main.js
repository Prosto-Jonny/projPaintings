import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictures from "./modules/pictures";
import accordion from "./modules/accordion";
import burger from "./modules/burger";


window.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders('.feedback-slider-item', 'horizont', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictures('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger', '.burger-menu');
});