console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagen1');
const ctx = canvas.getContext('2d');

//Constantes de los deslizadores 
const R = document.getElementById("R");
const G = document.getElementById("G");
const B = document.getElementById("B");
const range_value_R = document.getElementById("range_value_R");
const range_value_G = document.getElementById("range_value_G");
const range_value_B = document.getElementById("range_value_B");
imagen1.onload = function () {

  console.log("Imagen cargada");
  canvas.width = imagen1.width;
  canvas.height = imagen1.height;

//-- Situar la imagen original en el canvas
//-- No se han hecho manipulaciones todavia
ctx.drawImage(img, 0,0);
}

//Funcion deslizadores
function RGB(){
  range_value_R.innerHTML = R.value;
  range_value_G.innerHTML = G.value;
  range_value_B.innerHTML = B.value;

//Dibunjamos la imagen sin cambios
  ctx.drawImage(img, 0,0);

//La pasamos a pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//obtenemos un array de pixeles 
  let data = imgData.data;

//Obtenemos los umbrales de los deslizadores
  var umbral_R = R.value;
  var umbral_G = G.value;
  var umbral_B = B.value;

//Cambiamos la imagen segun el nuevo umbral

  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral_R)
      data[i] = umbral_R;

    if (data[i+1] > umbral_G)
      data[i+1] = umbral_G;

    if (data[i+2] > umbral_B)
      data[i+2] = umbral_B;
}

// Dibujamos esta vez la imagen modificada 
  ctx.putImageData(imgData, 0, 0);
}

const colores = document.getElementById("colores")
  colores.onclick = () => {
    R.oninput = () => {
      RGB()
    }

    G.oninput = () => {
      RGB()
    }
    B.oninput = () => {
      RGB()
    }

  }
//Funcion para blanco y negro 
function ByN(){
//  Imagen sin cambios 
    ctx.drawImage(img, 0,0);

// La pasamos a pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

// Obtener el array con todos los píxeles
    let data = imgData.data

// Filtrar la imagen
    for (let i = 0; i < data.length; i+=4) {
// Asignamos variables RGB
      var r = data[i];
      var g = data[i+1];
      var b = data[i+2];
      brillo = (3 * r + 4 * g + b)/8
      data[i] = brillo;
      data[i+1] = brillo;
      data[i+2] = brillo;
  }
  ctx.putImageData(imgData, 0, 0);
}

const ByN = document.getElementById("ByN")
  grises.onclick = () => {
    ByN();
  }