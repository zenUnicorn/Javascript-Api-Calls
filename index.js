import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

   function getElements(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});

//API URL
const url = http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[Add-Your-API-Key]; 

// function that listens for changes to the XMLHttpRequest
request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const response = JSON.parse(this.responseText);
    getElements(response);
  }
};

// track changes in the ready state
request.onreadystatechange = function() {
  console.log(this.readyState);
};

const response = JSON.parse(this.responseText);

//callback
getElements(response);

request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    debugger;
    ...
  }
};


let request = new XMLHttpRequest();
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]`;

request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const response = JSON.parse(this.responseText);
    getElements(response);
  }
};

// We've covered everything except for the two lines below!
request.open("GET", url, true);
request.send();

// Note: This code will not work! It's meant to show why we need to structure our code to use a callback.

    let response;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        response = JSON.parse(this.responseText);
      }
    };

    request.open("GET", url, true);
    request.send();
    getElements(response);

//Let's look at our original code once more:
request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }


