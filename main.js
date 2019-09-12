// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

planets.forEach(createSelection);// var.forEach(function) this pulles the all the objects from the array making them parameters forEach and exectues the function/parameter

function createSelection(item) { // function called above which is also the parent of the above arrays.
  var option = document.createElement('option'); // brings into exsistence the element option which is attached to the variable option. This is done for clarity. 
  var dropdownplanets = document.getElementById('planets')
  dropdownplanets.appendChild(option).textContent = item[0];
}



function calculateWeight(weight, planetName) {
  // 2. Write the code to return the correct weight
  var planetName = document.getElementById('planets').selectedIndex;
  var newGravity = planets[planetName][1];

  return weight * newGravity;
}

calculateWeight();

function handleClickEvent() {
  // 3. Create a variable called userWeight and assign the value of the user's weight.
  var weight = parseFloat(document.getElementById('user-weight').value);
  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  var planetName = document.getElementById('planets').value;
  // 5. Create a variable called result and assign the value of the new calculated weight.
  var result = calculateWeight(weight, planetName);
  // 6. Write code to display the message shown in the screenshot
  document.getElementById('output').innerHTML = ' If you were on ' + planetName + ', you would weigh ' + result + 'lbs';
  document.body.innerHTML = document.body.innerHTML.replace('NaN', '0'); 
  //before adding this code above if you did not input a numerical value into the input it would return NaN now it returns 0
}
// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)
