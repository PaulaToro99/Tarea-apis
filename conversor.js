function convertirEURaCOP(){
    let valor = document.getElementById("inputEuros").value;
    let endpoint = `https://api.exchangerate.host/latest?from=EUR&to=COP&amount=${valor}`

    fetch(endpoint)
    .then((data) => {
        data.json()
        .then ((json) =>{
            printConversion(json.rates)
        })
        .catch ((err) =>{
            console.log (err)
        })
    })
    .catch((error) => {
        console.log(error)
    })
    
}

function printConversion(rate){
    document.getElementById("eurosCOP").innerHTML = '' + rate.COP + '<br>Pesos Colombianos';
    document.getElementById("eurosUSD").innerHTML = '' + rate.USD + '<br>Dolares Americanos';
    document.getElementById("eurosGBP").innerHTML = '' + rate.GBP + '<br>Libra Esterlina';
    document.getElementById("eurosVES").innerHTML = '' + rate.VES + '<br>Bolívar venezolano';
    document.getElementById("eurosBTC").innerHTML = '' + rate.BTC + '<br>Bitcoin';
}
// evitar el refresco de la pagina  
var form = document.getElementById("conversion-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
