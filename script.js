$(document).ready(function(){
    $('#detail-btn').click(function (event){
        event.preventDefault();
        var location = $('#search').val();
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&APPID=e56b5de6b132c861a8492c9fe616fa8d`,
            type: 'GET',
            success: function(response,status){
                var loc = response.name +", "+response.sys['country'];
                loc = loc.toUpperCase();
                var description = response.weather[0]['main'];
                description = description.toUpperCase();
                var temperature = Math.round(response.main['temp']);
                temperature = `Temperature : ${temperature}°C`;
                var humidity = response.main['humidity'];
                humidity = `Humidity : ${humidity}%`;
                var wind_speed = response.wind['speed'];
                wind_speed = `Wind Speed : ${wind_speed} Km/h`;
                var pressure = response.main['pressure'];
                pressure = `Pressure : ${pressure} hpa`;
                $('#location').html(loc);
                $('#description').html(description);
                $('#temp').html(temperature);
                $('#humidity').html(humidity);
                $('#wind-speed').html(wind_speed);
                $('#pressure').html(pressure);
                if(description == 'CLEAR'){
                    $('img').attr('src','icons/clear.svg');
                }
                if(description == 'CLOUDS'){
                    $('img').attr('src','icons/cloud.svg');
                }
                if(description == 'HAZE'){
                    $('img').attr('src','icons/haze.svg');
                }
                if(description == 'RAIN'){
                    $('img').attr('src','icons/rain.svg');
                }
                if(description == 'SNOW'){
                    $('img').attr('src','icons/snow.svg');
                }
                if(description == 'STORM'){
                    $('img').attr('src','icons/storm.svg');
                }
            },
            error: function(error,status){
                alert("City not found.");
            }
        })
    })
})