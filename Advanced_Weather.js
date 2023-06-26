let search_button=document.querySelector(".searchButton")
let city_input=document.querySelector(".searchInput")

window.onload=async function(){
  city_input.value="Amritsar"
  let data=await get_data()
  putdata(data)
  let forecast= await   get_forecast()
  putforecast(forecast)
}
search_button.onclick=async function(){
  let data=await get_data()
  console.log(data)
  putdata(data)
  let forecast=await get_forecast()
  putforecast(forecast)
}
function get_forecast(){
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city_input.value}&appid=8109965e7254a469d08a746e8b210e1e&units=imperial&cnt=10`)
  .then(response=>response.json())
  .then(json=>json)
}
function get_data(){
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_input.value}&appid=8109965e7254a469d08a746e8b210e1e&units=imperial`)
  .then(response=>response.json())
  .then(json=>json)
}

function putdata(data){
  document.getElementById("wind").innerText=data.wind.speed
  document.getElementById("lowestToday").innerText=data.main.temp_min
  document.getElementById("highestToday").innerText=data.main.temp_max
  document.getElementById("pressure").innerText=data.main.pressure
  document.getElementById("humidity").innerText=data.main.humidity
  document.getElementById("location").innerText=data.name
  document.getElementById("currentTemp").innerText=data.main.temp_max
  document.getElementById("weatherDescription").innerText=data.weather[0].description
  document.getElementById("weatherIcon").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  
  let sunrise = new Date(data.sys.sunrise * 1000)
  let sunset = new Date(data.sys.sunset * 1000)

  document.getElementById("sunrise").innerText = sunrise.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  })

  document.getElementById("sunset").innerText = sunset.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  })
  document.getElementById("sunriseRelative").innerText = timeago.format(sunrise)
  document.getElementById("sunsetRelative").innerText = timeago.format(sunset)
  document.getElementById("date").innerText = new Date(Date.now()).toLocaleString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

const currentTime = new Date();

const localOffset = currentTime.getTimezoneOffset() * 60000; // Offset in milliseconds
const targetOffset = data.timezone * 1000; // Convert to milliseconds
const targetTime = currentTime.getTime() + localOffset + targetOffset;

const targetDate = new Date(targetTime);
const hours = targetDate.getHours();
const minutes = targetDate.getMinutes();

const formattedHours = formatNumber(hours % 12 || 12);
const period = hours < 12 ? 'AM' : 'PM';

const timeInTimezone = `${formattedHours}:${formatNumber(minutes)} ${period}`;

document.getElementById("time").innerText=timeInTimezone 
}

function formatNumber(number) {
  return number.toString().padStart(2, '0');
}

function putforecast(forecast){
  console.log(forecast)
  document.getElementById("f1_time").innerText=getTimeInAMPM(forecast.list[0].dt_txt)
  document.getElementById("f1_description").innerText=forecast.list[0].weather[0].description
  document.getElementById("f1_temp").innerText=forecast.list[0].main.temp
  document.getElementById("f1_wind").innerText=forecast.list[0].wind.speed

  document.getElementById("f2_time").innerText=getTimeInAMPM(forecast.list[1].dt_txt)
  document.getElementById("f2_description").innerText=forecast.list[1].weather[0].description
  document.getElementById("f2_temp").innerText=forecast.list[1].main.temp
  document.getElementById("f2_wind").innerText=forecast.list[1].wind.speed

  document.getElementById("f3_time").innerText=getTimeInAMPM(forecast.list[2].dt_txt)
  document.getElementById("f3_description").innerText=forecast.list[2].weather[0].description
  document.getElementById("f3_temp").innerText=forecast.list[2].main.temp
  document.getElementById("f3_wind").innerText=forecast.list[2].wind.speed

  document.getElementById("f4_time").innerText=getTimeInAMPM(forecast.list[3].dt_txt)
  document.getElementById("f4_description").innerText=forecast.list[3].weather[0].description
  document.getElementById("f4_temp").innerText=forecast.list[3].main.temp
  document.getElementById("f4_wind").innerText=forecast.list[3].wind.speed

  document.getElementById("f5_time").innerText=getTimeInAMPM(forecast.list[4].dt_txt)
  document.getElementById("f5_description").innerText=forecast.list[4].weather[0].description
  document.getElementById("f5_temp").innerText=forecast.list[4].main.temp
  document.getElementById("f5_wind").innerText=forecast.list[4].wind.speed

  document.getElementById("f6_time").innerText=getTimeInAMPM(forecast.list[5].dt_txt)
  document.getElementById("f6_description").innerText=forecast.list[5].weather[0].description
  document.getElementById("f6_temp").innerText=forecast.list[5].main.temp
  document.getElementById("f6_wind").innerText=forecast.list[5].wind.speed

  document.getElementById("f7_time").innerText=getTimeInAMPM(forecast.list[6].dt_txt)
  document.getElementById("f7_description").innerText=forecast.list[6].weather[0].description
  document.getElementById("f7_temp").innerText=forecast.list[6].main.temp
  document.getElementById("f7_wind").innerText=forecast.list[6].wind.speed

  document.getElementById("f8_time").innerText=getTimeInAMPM(forecast.list[7].dt_txt)
  document.getElementById("f8_description").innerText=forecast.list[7].weather[0].description
  document.getElementById("f8_temp").innerText=forecast.list[7].main.temp
  document.getElementById("f8_wind").innerText=forecast.list[7].wind.speed
  
  document.getElementById("f9_time").innerText=getTimeInAMPM(forecast.list[8].dt_txt)
  document.getElementById("f9_description").innerText=forecast.list[8].weather[0].description
  document.getElementById("f9_temp").innerText=forecast.list[8].main.temp
  document.getElementById("f9_wind").innerText=forecast.list[8].wind.speed

  document.getElementById("f10_time").innerText=getTimeInAMPM(forecast.list[9].dt_txt)
  document.getElementById("f10_description").innerText=forecast.list[9].weather[0].description
  document.getElementById("f10_temp").innerText=forecast.list[9].main.temp
  document.getElementById("f10_wind").innerText=forecast.list[9].wind.speed
  
}

function getTimeInAMPM(dateTimeString) {
  const dateObj = new Date(dateTimeString);
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const timeInAMPM = `${formattedHours}:${formattedMinutes} ${ampm}`;
  return timeInAMPM;
}
