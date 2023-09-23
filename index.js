/* *****DOM Selection***** */
let startButton = document.querySelector("#start")
let stopButton = document.querySelector("#stop")
let colorPallet = document.querySelector("#colorPallet")

/* *****Functional Codes***** */

/* Hex Array */
let hexCodeContainer = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

/* Function to generate random No */
const randomNo = function (){
 let a = Math.floor(Math.random() * hexCodeContainer.length);
 return a;
}

/* Function to generate random Color */
const randomHexCode = function () {
 let b = "#"
 for (let i = 0; i < 6; i++) {
  b = b + hexCodeContainer[randomNo()];
 }
 console.log(b);
 colorPallet.innerHTML = b;
 colorPallet.style.backgroundColor = b;
 b = null;
}

/* Function to generate random color continuously */
let randomHexCodeGenFun;
let randomHexCodeGen = function () {
 randomHexCodeGenFun = setInterval(randomHexCode,1000)
}

/* Function to stop generate random color continuously */
let stopRandomHexCode = function () {
 clearInterval(randomHexCodeGenFun);
}


/* *****Dom Manipulation Code***** */

startButton.addEventListener('click', randomHexCodeGen);
stopButton.addEventListener('click',stopRandomHexCode);






