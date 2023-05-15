// console.log("Testing, testing, 1 2 3 ...")

let apiData; 
const countriesList = document.querySelector("#countriesList");
const enter = document.querySelector("#enter"); 

async function setup(){
    fetchREST();
    countriesList.innerHTML = "";
    apiData = await fetchREST()
    apiData.map(country => {
        createNewCountryElement(country)
    })
}

const fetchREST = async () => {
    // load in an array of countries
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
}

setup();

function createNewCountryElement (country) {
    const newListItem = document.createElement("li")
    newListItem.innerText = `${country.name.common}, population: ${country.population}`
    countriesList.appendChild(newListItem);
}

enter.addEventListener("click", event => {    
    // event.preventDefault();
    const newItem = document.getElementById("new-country").value 
    console.log(newItem);
    const filteredCountry = 
})




    // //creating somewhere for it to live on the webpage
    // const countriesContainer = document.createElement("div");
    // document.querySelector("body").appendChild(countriesContainer);

    // // countriesJsonData.message.forEach(())
