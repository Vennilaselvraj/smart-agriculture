// Smart Agriculture Application - JavaScript Functionality

// Function to get current weather data
async function getCurrentWeather(location) {
    const apiKey = 'YOUR_API_KEY';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    const data = await response.json();
    return data;
}

// Function to monitor soil moisture levels
function monitorSoilMoisture(sensorData) {
    if (sensorData.moisture < 30) {
        alert('Soil moisture is low! Time to water the plants.');
    }
}

// Function to send alerts for pest detection
function checkForPests(pestData) {
    if (pestData.detected) {
        alert('Pests have been detected!');
    }
}

// Example usage
(async () => {
    const weather = await getCurrentWeather('Your Location');
    console.log(weather);
})();

console.log('Smart Agriculture App functionality loaded!');