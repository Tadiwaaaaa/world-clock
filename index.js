function updateTime(){

let HarareElement = document.querySelector("#harare");
let HarareDateElement = HarareElement.querySelector(".date");
let HarareTimeElement = HarareElement.querySelector(".time");

let HarareTime = moment();
HarareDateElement.innerHTML = HarareTime.format("MMMM Do YYYY");
HarareTimeElement.innerHTML = `${HarareTime.format(
  "h:mm:ss"
)} <small>${HarareTime.format("A")}</small>`;

let ParisElement = document.querySelector("#paris");
let ParisDateElement = ParisElement.querySelector(".date");
let ParisTimeElement = ParisElement.querySelector(".time");

let ParisTime = moment().tz("Europe/Paris");
ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");
ParisTimeElement.innerHTML = `${ParisTime.format(
 "h:mm:ss"
)} <small>${ParisTime.format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);
