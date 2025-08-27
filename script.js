async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "18634a8a91bd8caaa60d92706b8ce9e6"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weather").innerHTML = "Cidade não encontrada 😢";
    } else {
      document.getElementById("weather").innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Clima:</strong> ${data.weather[0].description}</p>
        <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
        <p><strong>Sensação térmica:</strong> ${data.main.feels_like}°C</p>
        <p><strong>Umidade:</strong> ${data.main.humidity}%</p>
      `;
    }
  } catch (error) {
    document.getElementById("weather").innerHTML = "Erro ao buscar dados 😢";
    console.error(error);
  }
}
