// завдання 5


// Напиши скрипт который, при наборе текста в инпуте input #name-input (событие input),
//  подставляет его текущее значение в span #name-output. Если инпут пустой,
//  в спане должна отображаться строка 'Anonymous'.
  /* <input type="text" placeholder="Ваше имя?" id="name-input" />
    <h1>Привет, <span id="name-output">Anonymous</span>!</h1> */

const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener('input', event => {
	output.textContent = event.target.value

	if (event.target.value === '') {
		output.textContent = 'Anonymous'
	}
})

//проверить crurrentTarget
