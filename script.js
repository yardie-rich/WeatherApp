const apiKey = "4096f19af0ee0f5c69359df45e40feae";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const humidityElement = document.querySelector(".humidity"); // Added this line

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    humidityElement.innerHTML = data.main.humidity + "%"; // Updated this line
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main === "Clouds"){ // Used strict equality operator (===)
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "images/snow.png";
    }else{
        weatherIcon.src = "images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";

}
    
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})