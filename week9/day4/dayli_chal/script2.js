document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let latitude1 = document.getElementById('latitude1').value;
    let longitude1 = document.getElementById('longitude1').value;
    let latitude2 = document.getElementById('latitude2').value;
    let longitude2 = document.getElementById('longitude2').value;

    let url1 = `https://api.sunrise-sunset.org/json?lat=${latitude1}&lng=${longitude1}`;
    let url2 = `https://api.sunrise-sunset.org/json?lat=${latitude2}&lng=${longitude2}`;

    let request1 = fetch(url1)
      .then(response => response.json())
      .then(data => data.results.sunrise);

      let request2 = fetch(url2)
      .then(response => response.json())
      .then(data => data.results.sunrise);

    Promise.all([request1, request2])
      .then(values => {
        const sunriseTime1 = values[0];
        const sunriseTime2 = values[1];

        const sunriseTimesElement = document.getElementById('sunriseTimes');
        sunriseTimesElement.innerHTML = `
          <p>Heure du lever du soleil à Ville 1 : ${sunriseTime1}</p>
          <p>Heure du lever du soleil à Ville 2 : ${sunriseTime2}</p>
        `;
      })
      .catch(error => {
        console.log('Une erreur s\'est produite :', error);
      });
  });