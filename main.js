const title = document.getElementById('title')
const text = document.querySelector('.text')
console.log(title)
console.log(text)
title.textContent = 'Hello World'
title.style.color = 'blue'
title.style.backgroundColor = 'white'
title.style.padding = '10px'
text.textContent = 'This is a simple example of DOM manipulation.'
text.style.fontSize = '18px'
text.style.color = 'green'
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
	alert('Button clicked!')
	btn.style.backgroundColor = 'red'
	btn.style.color = 'white'
})
const input = document.getElementById('nameInput')
const button = document.getElementById('showName')
const output = document.getElementById('output')
button.addEventListener('click', () => {
	if (input.value.trim() !== '') {
		output.textContent = `Привет, ${input.value}!`
		output.style.fontSize = '20px'
		output.style.color = 'green'
	} else {
		output.textContent = 'Пожалуйста, введите ваше имя.'
		output.style.color = 'red'
	}
})
const clearButton = document.getElementById('clearButton')
clearButton.addEventListener('click', () => {
	input.value = ''
	output.textContent = ''
	input.focus()
})
