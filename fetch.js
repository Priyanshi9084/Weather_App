function getWeather() {

    var location = document.getElementById('location').value;
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&APPID=e56b5de6b132c861a8492c9fe616fa8d`) // this willl return promise
    .then((response) => {
        // console.log(response.json());   //this ten functiohn also return a promise
        return response.json();
    })
    .then((data) => {
        document.write(JSON.stringify(data));
        // document.getElementById('message').innerHTML = JSON.stringify(data.coord['lat']);
        // document.getElementById('message').innerHTML = JSON.stringify(data.coord);
    
    
    })
    .catch(() => {
      document.write('Data Is Not Fetched');
    })
    }