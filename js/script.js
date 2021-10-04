
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(document.getElementById("city-input").value);
  // Appel de la fonction fetchTodayForecast

  //alert(document.getElementById("city-input").value);

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API

      const data = response.data;
      console.log(data);

      // On récupère l'information principale
      const main = data[0].weather[0].main;
      const description = data[0].weather[0].description;
      const temp = data[0].main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data[0].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main0').innerHTML = main;
      document.getElementById('today-forecast-more-info0').innerHTML = description;
      document.getElementById('icon-weather-container0').innerHTML = icon;
      document.getElementById('today-forecast-temp0').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
