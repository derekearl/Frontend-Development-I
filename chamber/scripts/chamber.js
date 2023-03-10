let date = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[date.getDay()];
let dateNum = date.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
let year = date.getFullYear();
document.querySelector('#date').innerHTML = day + ", " + dateNum + " " + month + " " + year;
document.querySelector('#year').innerHTML = year;


//document.querySelector ('h1').innerHTML = '&copy' + year;//

let currentdate = document.lastModified;
document.querySelector('#updated').textContent = currentdate;
document.querySelector("#updated").innerHTML = document.lastModified;
