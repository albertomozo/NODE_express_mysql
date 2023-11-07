// const   API_URL_BASE = 'https://' +location.hostname + ':' + location.port;
// https://inquisitive-longma-f2c1af.netlify.app
const API_URL_BASE = 'https://inquisitive-longma-f2c1af.netlify.app';
console.log(API_URL_BASE);
url = API_URL_BASE +"/api/pelis";
const FETCH_OPTIONS_GET  = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Access-Control-Allow-Origin' : '*' // Configura el encabezado CORS
    // Otras cabeceras personalizadas que puedas necesitar
    },
    mode: 'cors', // Establece el modo CORS
    credentials: 'same-origin', // Configura las credenciales de la solicitud
  };
fetch(url,FETCH_OPTIONS_GET)
.then(response => response.json())
.then(response => {
    console.log(response);
    //trespuesta= JSON.stringify(response);
    trespuesta = '<table>';
    for (var i = 0; i < response.length; i++) {
        trespuesta += `<tr><td>${response[i].id}</td><td>${response[i].titulo}</td>`;
        trespuesta += `<td>${response[i].overview} </td>`;
        trespuesta += `<td><button>${response[i].id} Borrar</button></td>`;
        trespuesta += '</tr>';
    }
    trespuesta += '</table>';
    


    // mostrar resultados
    document.getElementById("app").innerHTML = trespuesta;


})
.catch(err => console.error(err));