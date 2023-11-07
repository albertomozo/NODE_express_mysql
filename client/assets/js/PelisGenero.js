 //const   API_URL_BASE = 'http://' +location.hostname + ':' + location.port;
 API_URL_BASE = 'http://localhost:3000';
console.log(API_URL_BASE);
url = API_URL_BASE +"/api/generos";
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
        trespuesta += `<tr><td>${response[i].id}</td><td>${response[i].genero}</td>`;
 
        trespuesta += `<td><button>${response[i].id} Borrar</button></td>`;
        trespuesta += '</tr>';
    }
    trespuesta += '</table>';
    


    // mostrar resultados
    document.getElementById("app").innerHTML = trespuesta;


})
.catch(err => console.error(err));