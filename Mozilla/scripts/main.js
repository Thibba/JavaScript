var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');

myHeading.innerHTML = 'Hi Dude !!!';

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
      myImage.setAttribute ('src','images/firefox1.png');
    } else {
      myImage.setAttribute ('src','images/firefox.png');
    }
}

myButton.onclick = function() {
    setUserName();
  }

function setUserName(){
    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        var storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
      }
    var myName = prompt('Insira seu nome.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool,' + myName;    
}