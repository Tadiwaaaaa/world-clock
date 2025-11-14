
let selectedCityTimeZone = null;

function updateTime() {
  //HARARE
  let HarareElement = document.querySelector("#harare");
  if (HarareElement) {
    let HarareDateElement = HarareElement.querySelector(".date");
    let HarareTimeElement = HarareElement.querySelector(".time");

    let HarareTime = moment();
    HarareDateElement.innerHTML = HarareTime.format("MMMM Do YYYY");
    HarareTimeElement.innerHTML = `${HarareTime.format(
      "h:mm:ss"
    )} <small>${HarareTime.format("A")}</small>`;
  }

  //PARIS
  let ParisElement = document.querySelector("#paris");
  if (ParisElement) {
    let ParisDateElement = ParisElement.querySelector(".date");
    let ParisTimeElement = ParisElement.querySelector(".time");

    let ParisTime = moment().tz("Europe/Paris");
    ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");
    ParisTimeElement.innerHTML = `${ParisTime.format(
      "h:mm:ss"
    )} <small>${ParisTime.format("A")}</small>`;
  }

  //SELECTED CITY
  if (selectedCityTimeZone) {
    let cityTime = moment().tz(selectedCityTimeZone);
    let cityName = selectedCityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
  </div>
  <a href="index.html">All cities</a>`;
  
  }
}

function updateCity(event) {
  value = event.target.value;
  if (value === "current"){
    selectedCityTimeZone = moment.tz.guess();
  } else {
    selectedCityTimeZone = value;
  }

  updateTime();
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
