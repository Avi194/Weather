const apiKey = "b17517c527bb090a8b9eb195a82401c2";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
var searchbox = document.getElementById("search");
var button = document.getElementById("btn")
var img = document.getElementById("Weathericon")
async function checkweather(city){
    const response = await fetch(apiURL + city +`&appid=${apiKey}`);
    var data = await response.json();

    document.getElementById("city").innerHTML = data.name;
 document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°c"+ "&nbsp;&nbsp;";
 document.getElementById("humidity").innerHTML = data.main.humidity+"&nbsp;"+"%";
 document.getElementById("wind").innerHTML = data.wind.speed+"km/h";
 if (data.weather[0].main == "Clouds"){
    img.src = "clouds.png"
}
else if (data.weather[0].main == "Clear"){
    img.src = "clear.png"
}
else if (data.weather[0].main == "Drizzle"){
    img.src = "drizzle.png"
}
else if (data.weather[0].main == "Humidity"){
    img.src = "humidity.png"
}
else if (data.weather[0].main == "Mist"){
    img.src = "mist.png"
}
else if (data.weather[0].main == "Rain"){
    img.src = "rain.png"
}
else if (data.weather[0].main == "Snow"){
    img.src = "snow.png"
}
document.querySelector(".w").style.display = "block"
 
}
button.addEventListener("click",()=>{
    checkweather(searchbox.value)
   
})

