
// Generacion de Nuevos Nodos - Como Generar Nuevos Nodos en Javascritp 

// Accediendo al Nodo "header" del html
let header = document.querySelector('header')

// Generando la estructura del header a traves del JavaScritp

//Creando un elemento dentro del header  - aca esta OnTheFly (no esta asignado a ningun Nodo)
let titulo = document.createElement('h1')
// Accediendo al Texto del Nodo Creado para darle Nombre - aca esta OnTheFly (no esta asignado a ningun Nodo)
titulo.textContent = 'Agregue - titulo a la pagina'

// Agregando el elemento "titulo" al Nodo Header - mediante el Metodo .appenchild()
header.appendChild(titulo)

// Agregando el elemento "titulo" al body 

// como no esta creado en el body primero acceso al document. y luego al .body 
document.body.appendChild(titulo)

// otra forma de hacerlo - Agregar el elemento titulo al Nodo body
let body = document.body
body.appendChild(titulo)


