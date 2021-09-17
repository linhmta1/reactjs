function handlerClick(evt){
   var dice1 = document.getElementById("dice-1");
   var dice2 = document.getElementById("dice-2");   
   dice1.src="./images/dice"+  Math.floor((Math.random() * 6) + 1) + ".png";
   dice2.src="./images/dice"+  Math.floor((Math.random() * 6) + 1) + ".png";
}