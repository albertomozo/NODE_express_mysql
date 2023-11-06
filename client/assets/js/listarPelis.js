const API_URL_BASE = 'http://' +location.hostname + ':' + location.port;
console.log(API_URL_BASE);
url = API_URL_BASE +"/api/pelis";
fetch(url)
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