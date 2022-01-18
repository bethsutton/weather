class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');

    // Main
    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.temp = document.getElementById('w-temp');
    // this.tempMax = document.getElementById('w-tempMax');
    // this.tempMin = document.getElementById('w-tempMin');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${weather.main.temp} °F`;

    const iconPng = weather.weather[0].icon;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconPng}@2x.png`);

    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} °F`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.temp.textContent = `Temperature: ${weather.main.temp} °F`;
  }
}