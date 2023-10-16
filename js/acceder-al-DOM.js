
// ***** ACCEDIENDO A LA PAGINA HTML A TRAVES DEL FORMATO DE NODOs ******

// 1. La transformacion de las etiquetas HTML habituales GENERA 2 NODOS ---> 1) Nodo Elemento y 2) Nodo Texto 

// 2. Dentro de Cada una de las etiquetas/Nodos Padres, ANTES de pasar a la etiqueta/Nodo hija, SIEMPRE va existir una etiqueta/NODO Texto que puede estar vacio/sin uso

// 3. Eso significa que podemos acceder individualmente al TEXTO que esta dentro de la etiqueta, este vacio o no 

// 4. El NODO HTML(Principal) solo puede tener 2 hijos ----> son: 1) body y 2) head

// 5. Todas las etiquetas HTML se transforman en un NODO

// 6. Todo los NODO han de tener un Padre - por Ende todas seran Hijas

// 7. El Unico NODO que NO tiene Padre es el NODO HTML de el provienen todos - Por lo que es el PADRE supremo


// ******* Accediendo a los Elemento del Document a traves de Metodos getElementsBy...() *********


// 1) "document.getElementsByClassName()" se encarga de acceder a UNO o MAS Nodos/Etiquetas del document y siempre devuelve una collecion

const header = document.getElementsByClassName('header')
console.log(header)

console.log(typeof header)
console.log(Array.isArray(header))

console.log('')

// 2) "document.getElementsByTagName()" se encarga de acceder al nombre de la etiqueta htlm que estamos buscando mediante el NOMBRE DE LA ETIQUETA (TAGNAME) y devuelve una coleccion 

const encabezado = document.getElementsByTagName('header')
console.log(encabezado)

console.log(typeof encabezado)
console.log(Array.isArray(encabezado))

console.log('')

// 3) "document.getElementsById()" se encarga de acceder al ID(unico) de elemento del html y me devuelve UN SOLO elemento html 
// Nota: si existe mas de un elemento que tengan el mismo ID me va devolver el primero que encuentre
// Es uno de los Metodos getElementsBy Mas Usados

let id = document.getElementById('venta')
console.log(id)

console.log(typeof id)
console.log(Array.isArray(id))

console.log(" ")


// ---------------- Acceder a los Elementos del HTLM en INDEX2 --------------------------

// Accediendo a la etiqueta <h1></h1> del HTML 
// Siempre me devuelve una coleccion HTML que coincida con el nombre buscado 
let h1 = document.getElementsByTagName('h1')
console.log(h1)


// ------ Accediendo y Modificando el texto/String de ETIQUETA/NODO h1 Mediante la Propiedad "innertext" --------

// Como h1 me devuelve una coleccion de especificar el Elemento al cual deseo Obetener y/O Modificar el Texto

// 1. Mostrando el texto contenido en <h1></h1>: Muestrame  el texto contenido en <h1></h1> en posicion 0 usando la propiedad innertext 
console.log(h1[0].innerText)

//2. Pisando/Cambiando Los Valores Contenido en h1[0]

h1[0].innerText = 'Cambie el Texto' 
console.log(h1[0].innerText)


// ******* Creando NODOS HTML **************
// ------ Accediendo y Modificando el texto/String de ETIQUETA/NODO <h1></h1> Mediante la Propiedad "textContent" -------- 

// Se Usa mas Este AHORA
h1[0].textContent = 'Hola Segunda Vez '
console.log(h1[0].textContent)

// MOSTRANDO que tiene la Etiqueta <h1></h1> en su posicion O en formato HTML (coleccion) - NO SOLO el texto 
console.log(h1[0])


// ******* Creando NODOS HTML **************
// ------ Accediendo al Elemento de una Etiqueta Cualquiera <div></div>/<ul></ul> etc ... por su id --------

// ****** Ejemplo 1 haciendo un <h2></h2>

let principal = document.getElementById('principal')
// Agregandole a let principal un <h2></h2> y que lo lea como un html 
principal.innerHTML = '<h2>Subtitulo</h2>'


// ****** Ejemplo 2 pasandole una lista a "let principal"
let listaFrutas = ['Peras', 'Manzanas', 'Bananas', 'Durazno']

for (let fruta of listaFrutas) {
    //Generamos un Acumulado para que Muestre todos los Elememtos del array
    principal.innerHTML += '<li>' + fruta + '</li>'
}

// NOTA: 
// 1. los Metodos Gets que me devuelven un elemento esta en escrito en Singular Ejemplo ---> getElementById
// 2. los Metodos Gets que me devuelven un Array esta en escrito en Plural Ejemplo ---> getElementsByID

