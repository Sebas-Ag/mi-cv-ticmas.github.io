
const contenido = document.querySelector("#listado-1");
const button = document.querySelector("button")

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'https://randomuser.me/api/portraits/men/76.jpg') {
      miImage.setAttribute('src','https://randomuser.me/api/portraits/men/73.jpg');
    } else {
      miImage.setAttribute('src', 'https://randomuser.me/api/portraits/men/74.jpg');
      
    }
    if (miSrc === 'https://randomuser.me/api/portraits/men/74.jpg') {
      miImage.setAttribute('src','https://randomuser.me/api/portraits/men/75.jpg');
} 
    if (miSrc === 'https://randomuser.me/api/portraits/men/75.jpg') {
      miImage.setAttribute('src','https://randomuser.me/api/portraits/men/76.jpg');
    } 
}


function mostrarMas(){
  if (contenido.className === "abierto") {
    contenido.className = "";
    button.textContent = "Mostrar más"
  }
  else {
    contenido.className = "abierto";
    button.textContent = "Mostrar menos"
  }
}