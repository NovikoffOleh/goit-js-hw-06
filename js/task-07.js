// завдання 7
// Напиши скрипт, который реагирует на изменение значения 
//input#font-size-control (событие input) и изменяет инлайн-стиль span#text 
//обновляя свойство font-size. В результате при перетаскивании ползунка будет 
//меняться размер текста.

const inputChange = document.querySelector('input#font-size-control')
const qweqwe = document.querySelector('span#text')

inputChange.addEventListener('change', g => {
    qweqwe.style.fontSize = `${g.target.value }px`
})
