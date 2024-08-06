const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
  if(mycheckbox.checked){
    subResult.textContent = 'You are subscribed!';
  }else{
    subResult.textContent = 'You are NOT subscribed!';
  }

  if(visaBtn.checked){
    paymentResult.textContent = 'You are paying with VISA Card';
  }
  else if(masterBtn.checked){
    paymentResult.textContent = 'You are paying with Master Card';
  }
  else if(payPalBtn.checked){
    paymentResult.textContent = 'You are paying with PayPal';
  }else{
    paymentResult.textContent = 'Please select your payment option!';
  }

}