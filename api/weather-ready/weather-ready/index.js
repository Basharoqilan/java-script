document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'e57613e4769e6c8433fe632f9d070772';

    function fetchWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const dayName = new Date().toLocaleString('en-US', { weekday: 'long' });
                const date = new Date().toLocaleDateString('en-GB');
                const temp = data.main.temp;
                const desc = data.weather[0].description;
                const pressure = data.main.pressure;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                document.querySelector('.date-dayname').textContent = dayName;
                document.querySelector('.date-day').textContent = date;
                document.querySelector('.location').textContent = `${data.name}, ${data.sys.country}`;
                document.querySelector('.weather-temp').textContent = `${temp}°C`;
                document.querySelector('.weather-desc').textContent = desc;
                document.querySelector('.PRESSURE-value').textContent = `         ${pressure} hPa`;
                document.querySelector('.humidity-view').textContent = `${humidity} %`;
                document.querySelector('.wind-view').textContent = `${windSpeed} km/h`;
            })
            .catch(error => {
                console.error('Error fetching data from OpenWeatherMap API:', error);
            });
    }

    document.querySelector('.listcity').addEventListener('change', function() {
        const city = this.value;
        fetchWeather(city);
    });

    // Fetch weather for default city on load
    fetchWeather(document.querySelector('.listcity').value);
});