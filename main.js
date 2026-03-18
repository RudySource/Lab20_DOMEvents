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
