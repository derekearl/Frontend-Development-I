let date = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[date.getDay()];
let dateNum = date.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
let year = date.getFullYear();
document.querySelector('#date').innerHTML = day + ", " + dateNum + " " + month + " " + year;
document.querySelector('#year').innerHTML = year;


//document.querySelector ('h1').innerHTML = '&copy' + year;//

let currentdate = document.lastModified;
document.querySelector('#updated').textContent = currentdate;
document.querySelector("#updated").innerHTML = document.lastModified;


//weather

const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/71259?unitGroup=metric&key=57NALRV6F75DVP8VRY5NQWN5P&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);

    let t = data.currentConditions.temp;
    document.querySelector('#degree').textContent = t.toFixed(1);

    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#speed').textContent = data.currentConditions.windspeed;
    document.querySelector('#weather-forecast').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather-icon').src = image;
    document.querySelector('#weather-icon').alt= data.currentConditions.conditions + ' icon';

    // Windchill Info Here
    let degree = document.querySelector("#degree").textContent;
    console.log(degree);
    let speed = document.querySelector("#speed").textContent;
    console.log(speed);

    let chill = Math.round((35.74 + (0.6215 * degree))-(35.75 * Math.pow(speed,0.16)) + (0.4275*degree*Math.pow(speed,0.16)));

    if (degree <= 50 && speed >= 3) {
        document.querySelector("#chill").textContent = chill;
    };
}

getWeather();
