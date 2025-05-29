// First Dice
var randomNumber1 =  Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage ;

var image1 = document.querySelectorAll("img")[0];

var first = image1.setAttribute("src", randomImageSource);

// Second Dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image2 = document.querySelectorAll("img")[1];

var second = image2.setAttribute("src", randomImageSource1);


// A condition that check for the winner 

if(randomImageSource > randomImageSource1){
     document.querySelector("h2").innerHTML = "Player 1 win 🎉";
}else if(randomImageSource < randomImageSource1){
    document.querySelector("h2").innerHTML = "Player 2 win 🎉";
}
else{
    document.querySelector("h2").innerHTML = "Draw!";
}

