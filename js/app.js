var age = prompt('Ваш возраст?');
var wrapper = document.getElementById('promoWrapper');
console.log(wrapper.classList);
if (age<16) {
    wrapper.classList.toggle('aquapark');
} else if (age>=16 && age<=35) {
    wrapper.classList.toggle('club');
} else {
    console.log(wrapper.classList);
}

var titleText = 'Привет, мой друг! Добро пожаловать на сайт группы отелей Selly Hotels!';
var promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
promoTitle.innerText = titleText;                       // заменяем текст в заголовке