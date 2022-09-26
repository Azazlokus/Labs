function func(){
    let pin = document.getElementById("pin").value;
    let flag = validatePIN(pin);
    document.getElementById("res").innerHTML = flag;
}


function validatePIN (pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}