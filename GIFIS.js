function buscar(){
    // recuperar el valor del input digitado por el usuario
    let valor = document.getElementById("busqueda").value;
    // creamos el enpoint a consumir en GIPHY concatenando el valor digitado
    let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=TTaUam9g7XdjMJJI39WURTtXcZbehlHC&q="${valor}"&limit=25&offset=0&rating=r&lang=es`;
    
    // controlamos que el valor digitado no sea vacio
    if (valor === ''){
        alert("Digita un valor, por favor");
        throw new Error("El valor de la busqueda no puede ser vacio");
    }
    
    // hacemos llamda API al endpoint con sus parametros
    fetch(endpoint)
    .then((data) => {
        data.json()
        .then ((json) =>{
            // Si se retrona data, la guardamos en la variable json y la enviamos a la siguiente funcion para pintar el resultado
            printGifs(json.data)
        })
        .catch ((err) =>{
            console.log (err)
        })
    })
    .catch((error) => {
        console.log(error)
    })
    
}


function printGifs(array = []){
    // creamos variable vacia donde alamacenaremos todos los gifs concatenatos en la etiqueta de html IMG para poder pintalo
    let arrayGifs = "";
    array.forEach((item) =>{
        // recorremos el json pasado por parametro a la funcion
        let gif = `<img src="${item.images.original.webp}" alt="${item.slug}">;`
        // concatenemos el valor recorrido con los valores previos almacenados
        arrayGifs += gif;        
    })
    // una vez recorrido el array, insertamos todo el HTML concatenado al elemento con ID results
    document.getElementById("results").innerHTML = arrayGifs;
}

// evitar el refresco de la pagina al hacer submit
var form = document.getElementById("giphy-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
