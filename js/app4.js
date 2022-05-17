const abrirAPI = document.querySelector('#cargarApi')
abrirAPI.addEventListener('click', mostrarDatos)

function mostrarDatos() {
    const url = "https://jsonplaceholder.typicode.com/photos"

    fetch(url)
        .then(res => res.json())
        .then(datos => mostrarHTML(datos))
}

function mostrarHTML(fotos) {
    const body = document.querySelector('body')
    const section = document.createElement('section')
    section.classList.add('cards-component')
    body.appendChild(section)
    fotos.map(foto => {
        const { title, thumbnailUrl } = foto
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <img src="${thumbnailUrl}">
        <h2>${title}</h2>
        `

        section.appendChild(card)
    });
}