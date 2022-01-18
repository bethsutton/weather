// Init weather object and ui
const weather = new Weather('Austin', 'US');
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => {
      // console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}