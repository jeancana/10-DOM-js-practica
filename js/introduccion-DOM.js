/* alert('hola') */

// ********* DOM - Documento Object Model ***********

//El DOM es una interfaz de programación que brinda acceso a la estructura y contenido de una página web y es fundamental para el desarrollo de aplicaciones web interactivas y dinámicas.

//DOM significa "Documento Object Model" en inglés, y se traduce como "Modelo de Objetos del Documento" en español

// Representa cada elemento (como encabezados, párrafos, imágenes, enlaces, etc.) y su relación jerárquica en un documento web como un conjunto de objetos que pueden ser accedidos y manipulados por scripts. Esto permite la creación de aplicaciones web interactivas y dinámicas, ya que los desarrolladores pueden cambiar el contenido, el estilo y la estructura de una página web en tiempo real, respondiendo a las interacciones del usuario o a eventos del navegador.

// El DOM (Modelo de Objetos del Documento) esta dentro del BOM (Modelo de Objetos del Browser)

// ****** IMPORTANTE  ETIQUETAS(HTML) = NODOS(DOM) ********
// 1 - Las Etiquetas de HTML se transforman en NODOS(Objetos) en JavaScritp
// 2. - Las Etiquetas de HTML tienen jerarquias ----> Etiquetas Padres y Etiquetas Hijas por los tanto existen NODOs Padres y NODOS Hijos (Objetos Anidados) 
// 3. Al ser los NODOS del DOM Objetos tiene Propiedades y Metodos
// 4. La idea PRINCIPAL DEL DOM es acceder a partes especificas del "document" donde vamos HACER C.R.U.D del contenido 

// ----- Accesos a los NODOS de HTML a traves de JavaScritp POR MEDIO DEL DOM  -------

// --- ACCEDIENDO A TODOS LAS ETIQUETAS HTLM A TRAVES DEL .document--- 

// 1. La Forma mas Tradicional de Acceder
console.log(window.document)

// 2. La Segunda Forma 
console.log(document)

// 3. La Tercera Forma
console.log(this.document)

// Nota: todos representan lo mismo xq estan trabajando con "OBJETO GLOBAL WINDOWS.DOCUMENT"

// ---- Viendo las Propiedades y Metodos de "document." 

// haciendo una copia por referencia de document en la variable elemento y Acceso a todas las etiquetas HTML
let elemento = document;

// Accediendo a todos los Nodos(elementos) que estan dentro del DOM y me dan acceso al HTML
let elemento1 = document.all
console.log(elemento1) // Me devuelve una coleccion de Elementos HTML

// Accediendo SOLO al Primer Nodo que estan dentro del DOM y esto me da acceso a la etiqueta HTML en posicion Cero
elemento1 = document.all[0]
console.log(elemento1) // Me devuelve el Elemento del DOM que esta en la posicion 0

// Accediendo al Nodo que Resprenta al Head del HTML
elemento1 = document.head
console.log(elemento1) // Me devuelve todas las propiedades del Elemento head

// Accediendo al Nodo que Resprenta al Head del HTML
elemento1 = document.body
console.log(elemento1) // Me devuelve todas las propiedades del Elemento body

// Identificando el Dominio 
elemento1 = document.domain
console.log(elemento1) // Me devuelve el dominio que identifica el documento

// Identificando la URL
elemento1 = document.URL
console.log(elemento1) // Me devuelve la URL

// -------- ESTO QUE VIENE CASI NUNCA SE USAN SON MOSTRADOS A MODO ACADEMICO -----------

elemento1 = document.characterSet
console.log(elemento1) // Me devuelve

elemento1 = document.contentType
console.log(elemento1) // Me devuelve el tipo de Texto Usado - tipo de contenido

elemento1 = document.forms
console.log(elemento1) // Me devuelve el formulario 

elemento1 = document.forms[0]
console.log(elemento1) // Me devuelve el formulario que esta en la posicion Cero

elemento1 = document.forms[0].id
console.log(elemento1) // Me devuelve el Id del Formulario  que esta en la posicion Cero

elemento1 = document.forms[0].method
console.log(elemento1) // Me devuelve Metodo Usado del Formulario  que esta en la posicion Cero

elemento1 = document.forms[0].action
console.log(elemento1) // Me devuelve

elemento1 = document.images
console.log(elemento1) // Me devuelve la imagenes contenidas en el documento

elemento1 = document.scripts
console.log(elemento1) // Me devuelve los scripts que existen


