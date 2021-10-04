
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(document.getElementById("city-input").value);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API

      const data = response.data;
      console.log(typeof data);

      // On récupère l'information principale

      for(let day =0; day < 4; day++) 
      {

      const main = data.list[0].weather[0].main;
      const description = data.list[day].weather[0].description;
      const temp = data.list[day].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[day].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main'+day).innerHTML = main;
      document.getElementById('today-forecast-more-info'+day).innerHTML = description;
      document.getElementById('icon-weather-container'+day).innerHTML = icon;
      document.getElementById('today-forecast-temp'+day).innerHTML = `${temp}°C`;

      }

      
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
