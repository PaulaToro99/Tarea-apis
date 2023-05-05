
function calcularedad(){
    let valor = document.getElementById("nombre").value;
    let endpoint = `https://api.agify.io?name=${valor}`

    fetch(endpoint)
    .then((data) => {
        data.json()
        .then ((json) =>{
            printAge(json);
        })
        .catch ((err) =>{
            console.log (err)
        })
    })
    .catch((error) => {
        console.log(error)
    })
    
}

function printAge(data){
    document.getElementById("globoEdad").innerHTML = data.age;
    document.getElementById("globoEdad").classList.add("show");
    document.getElementById("globoEdad").style.left = (data.age) + "%";
    document.getElementById("rangeEdad").value = data.age;

}

// evitar el refresco de la pagina  
var form = document.getElementById("nombres-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);