const apiKey = "4af264a155feb76db62c60df60542c58";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const error = document.getElementById("error");
    error.innerText = "";

    if(city === ""){
        error.innerText = "Please enter a city name";
        return;
    }

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("city").innerText =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("temp").innerText =
            `Temperature: ${data.main.temp} °C`;

        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
            `Wind Speed: ${data.wind.speed} m/s`;

        document.getElementById("description").innerText =
            `Condition: ${data.weather[0].description}`;

    }
    catch(err){
        error.innerText = err.message;
    }
}