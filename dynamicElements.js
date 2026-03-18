const addUserBtn = document.getElementById('addUserBtn')
const userList = document.getElementById('userList')
let userCounter = 1
userList.addEventListener('click', event => {
	if (event.target.classList.contains('delete-btn')) {
		const listItem = event.target.parentElement
		listItem.remove()
		updateUserStats()
	}
})

function updateUserStats() {
	const userCount = userList.children.length
	const statsElement =
		document.querySelector('.user-stats') || createStatsElement()
	statsElement.textContent = `Всего пользователей: ${userCount}`
}

function createStatsElement() {
	const stats = document.createElement('div')
	stats.className = 'user-stats'
	stats.style.marginTop = '20px'
	stats.style.fontSize = '16px'
	stats.style.fontWeight = 'bold'
	stats.style.color = 'blue'
	userList.parentElement.appendChild(stats)
	return stats
}
addUserBtn.addEventListener('click', () => {
	const listItem = document.createElement('li')
	const userText = document.createTextNode(`Пользователь #${userCounter}`)
	const deleteBtn = document.createElement('button')
	deleteBtn.textContent = 'Удалить'
	deleteBtn.className = 'delete-btn'
	deleteBtn.style.marginLeft = '10px'
	deleteBtn.style.fontSize = '12px'

	listItem.appendChild(userText)
	listItem.appendChild(deleteBtn)
	userList.id = `user-${userCounter}`
	userList.appendChild(listItem)
	userCounter++
	updateUserStats()
})
