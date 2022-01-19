class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');

    // Main
    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity = document.getElementById('w-humidity');
    this.tempMax = document.getElementById('w-tempMax');
    this.tempMin = document.getElementById('w-tempMin');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.temp.textContent = `${Math.round(weather.main.temp)}°F`;

    const iconPng = weather.weather[0].icon;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconPng}@2x.png`);

    this.feelsLike.textContent = `Feels Like: ${Math.round(weather.main.feels_like)}°F`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.tempMax.textContent = `H: ${Math.round(weather.main.temp_max)}°F`;
    this.tempMin.textContent = `L: ${Math.round(weather.main.temp_min)}°F`;
    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;


  }
}