const btnAbrirTXT = document.querySelector("#abrirTxt")

btnAbrirTXT.addEventListener('click', obtenerDatos)

function obtenerDatos() {
    const url = 'data/datos2.txt'
    fetch(url)
        .then(res => {
            /* console.log(res.text()) */
            /*             console.log(res.statusText)
                        console.log(res.type)
                        console.log(res.url) */
            return res.text()
        })
        .then(datos => {
            mostrarHTMl(datos);
        })
        .catch(error => {
            console.log(error);
        })
}

/* Capturar el error y dejarlo de forma bonita */

function mostrarHTMl(datos) {
    const body = document.querySelector("body")
    const parrafo = document.createElement('p')
    parrafo.textContent = datos
    body.appendChild(parrafo)
}