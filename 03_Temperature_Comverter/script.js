//write a js funtion that converts fahreinheit to celcius,
// use html form to get the data,
//by default temp is to fahrenheit
// Use radio button to change the temperature type

const convertTemp = () => {
  const temperature = document.getElementById("tempValue").value;
  if (document.getElementById("celsius").checked === true) {
    const f = (temperature * 9) / 5 + 32;
    document.getElementById(
      "tempMsg"
    ).innerHTML = `${temperature}C is equal ${f}F`;
  }
  if (document.getElementById("fahreinheit").checked === true) {
    const c = ((temperature - 32) * 5) / 9;
    document.getElementById(
      "tempMsg"
    ).innerHTML = `${temperature}F is equal ${c}C`;
  }
};
