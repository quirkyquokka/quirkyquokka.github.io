var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/library.jpg') {
      myImage.setAttribute ('src','images/cat.png');
    } else {
      myImage.setAttribute ('src','images/library.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML  = 'Drink tea & read books, ' + myName;
  }

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML  = 'Drink tea & read books, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}