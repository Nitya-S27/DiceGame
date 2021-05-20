var randomNumber = Math.floor(Math.random() * 6 + 1);

var randomDiceImage = "dice" + randomNumber + ".png";

var randomImageFolder = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageFolder);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageFolder2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageFolder2);

if(randomNumber > randomNumber2) {

    var winnerAnnounced = document.querySelector("h1");

    winnerAnnounced.innerHTML = "🏆Player1";

}

else if(randomNumber2 > randomNumber) { 

    var winnerAnnounced = document.querySelector("h1");

    winnerAnnounced.innerHTML = "Player2🏆";

}

else {

    var winnerAnnounced = document.querySelector("h1");

    winnerAnnounced.innerHTML = "Draw!!!";

}
