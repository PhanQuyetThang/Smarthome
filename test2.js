const firebaseConfig = {
    apiKey: "AIzaSyBpJH2fYHxShfHzZMExuP4cm35OCcRpdDY",
    authDomain: "iot-internship-ute.firebaseapp.com",
    databaseURL: "https://iot-internship-ute-default-rtdb.firebaseio.com",
    projectId: "iot-internship-ute",
    storageBucket: "iot-internship-ute.appspot.com",
    messagingSenderId: "380908276873",
    appId: "1:380908276873:web:12cc1db71d851d53eb0a58",
    measurementId: "G-GVCJ3JN0EW"
  };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Auto load Temperature and Humidity-------------------------
firebase.database().ref("/TT_IoT/Temperature").on("value",function(snapshot){
  var nd = snapshot.val();  
  document.getElementById("Temperature").innerHTML = nd;
  console.log(nd);
});

firebase.database().ref("/TT_IoT/Humidity").on("value",function(snapshot){
  var da = snapshot.val();  
  document.getElementById("Humidity").innerHTML = da;
  console.log(da);
});
firebase.database().ref("/TT_IoT/Gas Concentrations").on("value",function(snapshot){
  var da = snapshot.val();  
  document.getElementById("Gas").innerHTML = da;
  console.log(da);
});
firebase.database().ref("/TT_IoT/CO2 Concentrations").on("value",function(snapshot){
  var da = snapshot.val();  
  document.getElementById("CO2 Concentrations").innerHTML = da;
  console.log(da);
});




//LAMB 01=================
// Get references to the checkbox inputs
var lamb1Checkbox = document.getElementById("toggle-checkbox1");
var lamb2Checkbox = document.getElementById("toggle-checkbox2");
var lamb3Checkbox = document.getElementById("toggle-checkbox3");
var lamb4Checkbox = document.getElementById("toggle-checkbox4");

// Attach event listeners to the checkboxes
lamb1Checkbox.addEventListener("change", function() {
  firebase.database().ref("/TT_IoT").update({
    "LAMP_01": this.checked ? "ON" : "OFF"
  });
});

lamb2Checkbox.addEventListener("change", function() {
  firebase.database().ref("/TT_IoT").update({
    "LAMP_02": this.checked ? "ON" : "OFF"
  });
});

lamb3Checkbox.addEventListener("change", function() {
  firebase.database().ref("/TT_IoT").update({
    "LAMP_03": this.checked ? "ON" : "OFF"
  });
});
lamb4Checkbox.addEventListener("change", function() {
  firebase.database().ref("/TT_IoT").update({
    "LAMP_04": this.checked ? "ON" : "OFF"
  });
});

//DEVICE====================
// Get references to the checkbox inputs
var device1Checkbox = document.getElementById("toggle-checkbox5");
var device2Checkbox = document.getElementById("toggle-checkbox6");
var device3Checkbox = document.getElementById("toggle-checkbox7");
var device4Checkbox = document.getElementById("toggle-checkbox8");

// Attach event listeners to the checkboxes
device1Checkbox.addEventListener("change", function() {
  firebase.database().ref("/TT_IoT").update({
    "Air Conditioner": this.checked ? "ON" : "OFF"
  });
});

device2Checkbox.addEventListener("change", function() {
  firebase.database().ref("/TT_IoT").update({
    "TV": this.checked ? "ON" : "OFF"
  });
});

device3Checkbox.addEventListener("change", function() {
  firebase.database().ref("/TT_IoT").update({
    "Wifi": this.checked ? "ON" : "OFF"
  });
});
device4Checkbox.addEventListener("change", function() {
  firebase.database().ref("/TT_IoT").update({
    "Camera": this.checked ? "ON" : "OFF"
  });
});



//AUTO UPDATE LAMB STATE========================================
// Get a reference to the Firebase database
var database = firebase.database();

//Lamb1=====
// Get a reference to the toggle button element
var toggle1Button = document.getElementById("toggle-checkbox1");

// Listen for changes in the "BULB_01" data
database.ref("/TT_IoT/LAMP_01").on("value", function(snapshot) {
  // Get the current status of the bulb
  var bulb1Status = snapshot.val();

  // Update the toggle button status
  toggle1Button.checked = (bulb1Status == "ON");
});
//Lamb2=====
// Get a reference to the toggle button element
var toggle2Button = document.getElementById("toggle-checkbox2");

// Listen for changes in the "BULB_02" data
database.ref("/TT_IoT/LAMP_02").on("value", function(snapshot) {
  // Get the current status of the bulb
  var bulb2Status = snapshot.val();

  // Update the toggle button status
  toggle2Button.checked = (bulb2Status == "ON");
});
//Lamb3=====
// Get a reference to the toggle button element
var toggle3Button = document.getElementById("toggle-checkbox3");

// Listen for changes in the "BULB_03" data
database.ref("/TT_IoT/LAMP_03").on("value", function(snapshot) {
  // Get the current status of the bulb
  var bulb3Status = snapshot.val();

  // Update the toggle button status
  toggle3Button.checked = (bulb3Status == "ON");
});
//Lamb4=====
// Get a reference to the toggle button element
var toggle4Button = document.getElementById("toggle-checkbox4");

// Listen for changes in the "BULB_04" data
database.ref("/TT_IoT/LAMP_04").on("value", function(snapshot) {
  // Get the current status of the bulb
  var bulb4Status = snapshot.val();

  // Update the toggle button status
  toggle4Button.checked = (bulb4Status == "ON");
});

//DEVICE STATE UPDATE
//Device1=====
// Get a reference to the toggle button element
var toggle5Button = document.getElementById("toggle-checkbox5");

// Listen for changes in the "Device_01" data
database.ref("/TT_IoT/Air Conditioner").on("value", function(snapshot) {
  // Get the current status of the bulb
  var bulb5Status = snapshot.val();

  // Update the toggle button status
  toggle5Button.checked = (bulb5Status == "ON");
});
//Device2=====
// Get a reference to the toggle button element
var toggle6Button = document.getElementById("toggle-checkbox6");

// Listen for changes in the "Device_02" data
database.ref("/TT_IoT/TV").on("value", function(snapshot) {
  // Get the current status of the bulb
  var bulb6Status = snapshot.val();

  // Update the toggle button status
  toggle6Button.checked = (bulb6Status == "ON");
});
//Device3=====
// Get a reference to the toggle button element
var toggle7Button = document.getElementById("toggle-checkbox7");

// Listen for changes in the "Device_03" data
database.ref("/TT_IoT/Wifi").on("value", function(snapshot) {
  // Get the current status of the bulb
  var bulb7Status = snapshot.val();

  // Update the toggle button status
  toggle7Button.checked = (bulb7Status == "ON");
});
//Device4=====
// Get a reference to the toggle button element
var toggle8Button = document.getElementById("toggle-checkbox8");

// Listen for changes in the "Device_04" data
database.ref("/TT_IoT/Camera").on("value", function(snapshot) {
  // Get the current status of the bulb
  var bulb8Status = snapshot.val();

  // Update the toggle button status
  toggle8Button.checked = (bulb8Status == "ON");
});

//Navigation Bar============================
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Time======================
let time = document.getElementById("current-time");

setInterval(() =>{
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000)