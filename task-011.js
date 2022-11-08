

// завдання 3


const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const createGalleryItem = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;
const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);
const galleryList = document.querySelector("#gallery");
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryList.setAttribute("style", "list-style-type:none; display: flex;");

//завдання 4
"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

 button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  button.span.textContent = counterValue;
};

button.sub.addEventListener("click", increment);
button.add.addEventListener("click", decrement);

// завдання 5


// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output. Если инпут пустой,
//  в спане должна отображаться строка 'Anonymous'.
  /* <input type="text" placeholder="Ваше имя?" id="name-input" />
    <h1>Привет, <span id="name-output">Anonymous</span>!</h1> */


let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.oninput = function () {
    if (input.value === '') {
       nameOutput.innerHTML = 'Anonymous';
    } else{
    nameOutput.innerHTML = input.value;
    }
}


// завдання 6

//Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

//<input
//  type="text"
// id="validation-input"
//  data-length="6"
//  placeholder="Please enter 6 symbols"
///>

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

//#validation-input {
//  border: 3px solid #bdbdbd;
//}

//#validation-input.valid {
//  border-color: #4caf50;
//}

//#validation-input.invalid {
  border-color: #f44336;
//}

let inputVal = document.getElementById("validation-input");

let totalLenght = inputVal.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputVal.oninput = function() {
  if (inputVal.value.length === intTotallenght) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove("valid");
    inputVal.classList.remove("invalid");
  }
  if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
    inputVal.classList.add("invalid");
  }
};

// завдання 7


// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
//<br />
//<span id="text">Abracadabra!</span>

let controlFont = document.getElementById("font-size-control");

let text = document.getElementById("text");

controlFont.oninput = function() {
  text.style.fontSize = controlFont.value + "px";
};


// завдання 8
//Напиши скрипт управления формой логина.

//<form class="login-form">
//  <label>
//   Email
 //   <input type="email" name="email" />
 // </label>
//  <label>
 //   Password
//    <input type="password" name="password" />
 // </label>
//  <button type="submit">Login</button>
//</form>

//Обработка отправки формы form.login-form должна быть по событию submit.
//При отправке формы страница не должна перезагружаться.
//Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
//Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
//Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. 

const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset()
}

// завдання 9

//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

//<div class="widget">
//  <p>Background color: <span class="color">-</span></p>
//  <button type="button" class="change-color">Change color</button>
//</div>

//Для генерации случайного цвета используй функцию getRandomHexColor.

//function getRandomHexColor() {
//  return `#${Math.floor(Math.random() * 16777215)
 //   .toString(16)
 //   .padStart(6, 0)}`;
//}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const changeButton = document.querySelector('button.change-color')
  const body = document.querySelector('body')
  const colorValue = document.querySelector('span.color')
  
  
  changeButton.addEventListener('click', e => {
    let color = getRandomHexColor();
    body.style.backgroundColor = color;
    colorValue.textContent = color;
  })