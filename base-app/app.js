// Selecionar elementos na DOM
const btn = document.getElementById('btn')
const space = document.getElementById('new')

// Evento do Botão
function newButton() {
    const createButton = document.createElement('button')
    createButton.innerHTML = 'Novo Botão'
    space.appendChild(createButton)
}

btn.addEventListener('click', newButton)
