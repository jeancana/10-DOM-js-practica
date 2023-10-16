
// ************************ TRABAJANDO EN INDEX4 ************************

let body2 = document.body;

let titulo = 'Bananas'

let objeto = {
  titulo: 'Banana',
  descripcion: 'Esto es una banana ',
  img: 'https://fotografias.lasexta.com/clipping/cmsimages01/2022/04/19/23DC124E-BFF5-4B16-8824-DE16504D1A19/simpson-series-animadas-mas-longevas-television-nacio-casualidad_98.jpg?crop=1024,576,x0,y0&width=1900&height=1069&optimize=low&format=webply',
  botton: 'Al infinito'
  
}

// ***** Creando a CARD con css usando bootstrap
// lo Asigno a la variable el contenido tomado de la pagina de bootstrap usando backticks y como esta linkeado Bootstrap a el index4.html logro Manipular el DOM del html 

body2.innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="${objeto.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${objeto.titulo}</h5>
    <p class="card-text">${objeto.descripcion}</p>
    <a href="#" class="btn btn-primary">${objeto.botton}o</a>
  </div>
</div>
`