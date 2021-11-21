const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const weather = jsonObject['weather'];
    for (let i = 0; i < weather.length; i++ ){
let card = document.createElement('section');
let h2 = document.createElement('h2');
let image = document.createElement('img');
let birthinfo = document.createElement('p');

h2.textContent = weather[i].name + ' ' + weather[i].lastname;
birthinfo.textContent = 'Date of Birth:'+ weather[i].birthdate + "\r\n";
birthinfo.textContent += 'Place of Birth:' + weather[i].birthplace;
image.setAttribute('src', weather[i].imageurl);

card.appendChild(h2);
card.appendChild(birthinfo);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);
    }
  // temporary checking for valid response and data parsing
  })