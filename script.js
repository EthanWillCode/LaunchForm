
window.addEventListener("load", function() {

    const target = document.getElementById("missionTarget");
    let pilotInput = document.querySelector("input[name=pilotName]");
    let coPilotInput = document.querySelector("input[name=copilotName]");
    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    



    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
        response.json().then( function(json){
            console.log(json)
            let planet = json[Math.floor(Math.random() * json.length)]
            target.innerHTML += `       
            <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planet.name} </li>
                    <li>Diameter: ${planet.diameter}</li>
                    <li>Star: ${planet.star}</li>
                    <li>Distance from Earth: ${planet.distance}</li>
                    <li>Number of Moons: ${planet.moons}</li>
                </ol>
                <img src="${planet.image}">`
        })
    })
//ready statements{
let launchform = document.querySelector("launchForm")
launchform.addEventListener("submit", function(event) {
    console.log(typeof pilotInput)
    if(typeof pilotInput === "undefined"){
        alert("All fields required")
        event.preventDefault();
    }
})
//ready statements }
})