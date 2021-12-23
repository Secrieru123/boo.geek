const btn = document.querySelector('#submit-form').addEventListener('click', submitForm)

let cityName = document.forms['cityName'].elements[0]

const loadData = (cb) => {

    let xhr = new XMLHttpRequest()

    xhr.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=94611b3775fa221a69e3f560801bbd67&units=metric`
    );

    xhr.send();


    xhr.onload = () => {         

        let data = JSON.parse(xhr.responseText)
        // console.log('>>', data.name)
        cb(data)
    };

};

const render  = (data) => {
    const city = document.getElementById('where').innerHTML = `${data.name}`
    const weather = document.getElementById('weather').innerHTML = `Temperature: ${data.main.temp} &deg;C`
    const humidity = document.getElementById('humidity').innerHTML = `Humidity: ${data.main.humidity} %`
    const winSpeed = document.getElementById('winSpeed').innerHTML = `Wind: ${data.wind.speed} km/h`
};

function submitForm(event) {
    if(cityName.value) {
        loadData(render)
    }
    event.preventDefault();
  }




