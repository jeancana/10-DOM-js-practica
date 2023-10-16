

let listaFrutas = ['Peras', 'Manzanas', 'Bananas', 'Durazno']

// Metodos Moderno para Acceder a los elementos de los NODOs 

//document.querySelector() ---> Hace una consulta global y devuele el primer Elemento que coincidan - UN ELEMENTO
//document.querySelectorAll() ---> Hace una consulta global y devuele todos los Elementos que coincidan - UNA COLECCION 

// Estos Metodos tiene una forma de devolucion distinta ---> Hacen una consulta que abstrae los que buscamos 
// por lo que podemos buscar cualquier de ellos ---> Etiqueta-Tag, Id, Clase-Class, pseudoSelector o una combinacion de todos 

// ********** Probando Los Query Selectors **********

console.log(document.querySelector('li')) // Devuelve el Primer li encontrado 

// Accediendo Texto del Primer li que consiga en la consulta
console.log(document.querySelector('li').innerText) 

console.log(" ")

// Consultando TODOS los li y Pisando elemento que esta en posicion 1 del Array 
let query1 = document.querySelectorAll('li')[1].innerText = 'Pisado/Cambiado' 
console.log(query1)

// Viendo todos lo que esta contenido en query1

// Creando un  h1 - Mediante una Consulta y le Agrego un enfasis
let h1 = document.querySelector('h1')
h1.innerHTML = '<em>cambie "Hola" x holis</em>'

// ******** Accediendo y/o Modificando A traves del "ID" ********
// NOTA: para que indentifique el ID debo primero colocar el # seguido del ID a buscar---------> #principal 
// Es una de las Formas mas usadas
let principal = document.querySelector('#principal')

//Monstrando a let principal como formato HTML
principal.innerHTML = '<hearder>ID:"principal"</hearder>'


// Haciendo una Busqueda Muy especifica a MODO ILUSTRATIVO 
// Logica Operando: Accede a todos los <li></li> que esta dentro del <ul></ul> que a su vez esta dentro del <nav></nav>
let lis = document.querySelectorAll('nav ul li')
// Mostrando todos los NODOS lis
console.log(lis)


// ******** Accediendo y/o Modificando A traves de una "Class/Clase" ********
// NOTA: para que indentifique la class/clase debo primero colocar el . seguido de la class/clase a buscar---------> .resaltado 
// Es una de las Formas mas usadas
let resaltado = document.querySelectorAll('.resaltado')
// Mostrando todos los NODOS resaltado
console.log(resaltado)

// Usando un poco sobre la etiqueta - Cambiando el color de la fuente 
resaltado[0].style.backgroundColor = 'yellow'
//resaltado[1].style.color = 'red'

// siempre que se usa el .style estamos hablando de los estilos en linea 


// ******** Agregando o Quitar Clases a un Html Mediando Javascritp ********

// Agregando a h1 la UNA sola clase ---> titulo 
// Nota: sirve para agregar una sola clase
h1.className = "titulo" 

// Agregando a h1 la Varias clases / Usando el metodo .classList.add() 
//h1.classList.add("titulo") 
h1.classList.add("resaltado")
//h1.classList.add("rojo")

// Removiendo clases a h1

//h1.classList.remove('titulo')


// **************** OPERACIONES BASICA A HACER CON UN QUERYSELECTOR - en los NODOS HTML *********************

// 1. Crear un Nodo/Etiqueta html - en cualquiera de sus formas

// 2. Acceder a cualquier Nodo/Etiqueta html y:
// 2.1 Obtener los que esta dentro del Nodo
// 2.2 Cambiar propiedades dentro del Nodo
// 2.3 Agregar un Nodo/Etiqueta html
