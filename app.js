//many time usable function to get all id
function getAllid(id){
  const idNameString=document.getElementById(id).value;
  const idNumber=parseFloat(idNameString).toFixed(2);
  return idNumber;
}
//many time usable function get inner text from use  id
function getAllinnerTextId(text){
  const idString=document.getElementById(text).innerText;
  return idString;
}
// many time usable function validation
function validation(inputone, inputtwo) {
  if (isNaN(inputone) || isNaN(inputtwo)) {
    alert("Please enter valid numbers.");
    return false;
  }
  else if (Number(inputone) <= 0 || Number(inputtwo) <= 0) {
    alert("Please enter positive numbers.");
    return false;
  }

  return true;
}
function commonCalculation(num1, num2) {
  // Check if inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    return "Invalid input";
  } else {
    const resultString = parseFloat(num1) * parseFloat(num2);
    const finalResult = (resultString * 0.5).toFixed(2);
    return finalResult;
  }
}
function commonCalculation(num1,num2){
  const resultString=parseFloat(num1)*parseFloat(num2);
  const finalResult=(resultString*0.5).toFixed(2);
  return finalResult;
}
function commonCalculationArea(num1,num2){
  const resultNumber=parseFloat(num1)*parseFloat(num2);
  return resultNumber;
}
//this calculation for triangle
let serial=0;
document.getElementById("triangle-btn").addEventListener("click", function () {
  serial += 1;
  const triangleName =getAllinnerTextId("triangle")
  const triangleinputOne=getAllid("triangle-first-input")
  const triangleInputTwo=getAllid("triangle-second-input")
  validation(triangleinputOne,triangleInputTwo);
   const totalvalue=commonCalculation(triangleinputOne,triangleInputTwo);
  //   show the data using function
  displayData(triangleName, totalvalue);
});
document.getElementById("btn-rectangle").addEventListener("click", function () {
  serial += 1;
  const rectangleName = getAllinnerTextId("rectangle")
  const rectangleInputOne = getAllid("rectangle-input-one")
  const rectangleInputTwo = getAllid("rectangle-input-two")
   validation(rectangleInputOne,rectangleInputTwo)
  const total = commonCalculationArea(rectangleInputOne,rectangleInputTwo);
  //   show the data using function
  displayData(rectangleName, total);
});
document.getElementById("btn-paralleogram").addEventListener("click", function () {
  serial += 1;
  const parallelogramName = getAllinnerTextId("parallelogram")
  const parallelogramInputOne =getAllid("parallelogram-input-one")
  const parallelogramInputTwo =getAllid("parallelogram-input-two")
  validation(parallelogramInputOne,parallelogramInputTwo)
  const total =commonCalculationArea(parallelogramInputOne,parallelogramInputTwo);
  //   show the data using function
  displayData(parallelogramName, total);
});
document.getElementById("btn-rhombus").addEventListener("click", function () {
  serial += 1;
  const rhombusName = getAllinnerTextId("rhombus")
  const rhombusInputOne = getAllid("rhombus-input-one")
  const rhombusInputTwo = getAllid("rhombus-input-two")
  // const total = parseInt(rhombusInputOne)*parseInt(rhombusInputTwo);
  const totalValue=commonCalculation(rhombusInputOne,rhombusInputTwo);
  //   show the data using function
  validation(rhombusInputOne,rhombusInputTwo)
  displayData(rhombusName, totalValue);
});
document.getElementById("btn-pentagon").addEventListener("click", function () {
  serial += 1;
  const pentagonName = getAllinnerTextId("pentagon")
  const pentagonInputOne = document.getElementById("pentagon-input-one").value;
  const pentagonInputTwo = document.getElementById("pentagon-input-two").value;
  validation(pentagonInputOne,pentagonInputTwo)
  const totalValue=commonCalculation(pentagonInputOne,pentagonInputTwo);
  //   show the data using function
  displayData(pentagonName, totalValue);
});
//This calculation for ellips
document.getElementById("ellips-btn").addEventListener("click", function () {
  serial += 1;
  const ellipsName = getAllinnerTextId("ellips")
  const ellipsInputOne = getAllid("ellips-input-one")
  const ellipsInputTwo = getAllid("ellips-input-two")
  validation(ellipsInputOne,ellipsInputTwo);
  const total = parseInt(ellipsInputOne)*parseInt(ellipsInputTwo);
  validation(ellipsInputOne,ellipsInputTwo);
  const totalValue=(3.1416*total).toFixed(2)
//  const cm=cm+2
  //   show the data using function
  displayData(ellipsName, totalValue,);
});
// common function to display data
function displayData(triangleName,totalValue,) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${triangleName}</td>
    <td>${totalValue}</td>

    <td>
    <button class="btn btn-sm btn-green-400">Convert m<sup>2</sup></button>
    </td> 
  `;
  container.appendChild(tr);
};
const cardone = document.getElementById('card-one');
cardone.addEventListener('mouseenter', function()
{
  function getRandomColor() {
    const letters = '0123456789ABCDKF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  cardone.style.backgroundColor = getRandomColor();
});
const cardtwo= document.getElementById('card-two');
cardtwo.addEventListener('mouseenter', function()
{
  function getRandomColor() {
    const letters = '0123456789ABCDKF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  cardtwo.style.backgroundColor = getRandomColor();
});
const cardthree= document.getElementById('card-three');
cardthree.addEventListener('mouseenter', function()
{
  function getRandomColor() {
    const letters = '0123456789ABCDKF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  cardthree.style.backgroundColor = getRandomColor();
});
const cardfour= document.getElementById('card-four');
cardfour.addEventListener('mouseenter', function()
{
  function getRandomColor() {
    const letters = '0123456789ABCDKF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  cardfour.style.backgroundColor = getRandomColor();
});
const cardfive= document.getElementById('card-five');
cardfive.addEventListener('mouseenter', function()
{
  function getRandomColor() {
    const letters = '0123456789ABCDKF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  cardfive.style.backgroundColor = getRandomColor();
});
const cardsix= document.getElementById('card-six');
cardsix.addEventListener('mouseenter', function()
{
  function getRandomColor() {
    const letters = '0123456789ABCDKF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  cardsix.style.backgroundColor = getRandomColor();
});