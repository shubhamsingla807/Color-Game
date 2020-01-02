var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickcolor();
  colorDisplay.textContent = pickedColor;

  for(var i=0;i<squares.length;i++){
  	if(colors[i]){
  		squares[i].style.backgroundColor = colors[i];
  	}
  	else{
  		squares[i].style.display = "none";
  	}
  }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
   easyBtn.classList.remove("selected");
   numSquares = 6;
   colors = generateRandomColors(numSquares);
  pickedColor = pickcolor();
  colorDisplay.textContent = pickedColor;

  for(var i=0;i<squares.length;i++){
  		squares[i].style.backgroundColor = colors[i];
  		squares[i].style.display = "block";
  	
  }
});

resetButton.addEventListener("click",function(){
      // generate all new colors
      colors = generateRandomColors(numSquares);
      //pick a new random color
      pickedColor = pickcolor();
      //Change colorDisplay to match picked color
      colorDisplay.textContent = pickedColor;
      // change color of squares
      for(var i=0;i<squares.length;i++){
      	squares[i].style.backgroundColor = colors[i];
      }
    // So that it doesn't display again correct.
       messageDisplay.textContent = "";

    // So that to make reset button again reset to show New Colors
        this.textContent = "New Color";   

     h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;
 
for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	//add click listener to sqaures

	squares[i].addEventListener("click", function(){
      // grab color of clicked sqaure
      var clickedColor = this.style.backgroundColor;

      // compare color to pickedColor

      if(clickedColor === pickedColor){
      	messageDisplay.textContent = "Correct";
      	resetButton.textContent = "Play Again?";
      	changeColors(clickedColor);
      	h1.style.backgroundColor = clickedColor;
      }
      else{
      	this.style.backgroundColor = "#232323";
      	messageDisplay.textContent = "Try again";
      }
	});
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// repeat num times
	for(var i=0;i<num;i++){
        //get random color and push into it
        arr.push(randomColor())

	}

	return arr;
}

function randomColor(){
	// pick a random color for red from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a random color for blue from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a random color for green from 0-255
	var b = Math.floor(Math.random() * 256);
    
    return "rgb("+ r + ", " + g + ", " + b +")";
}