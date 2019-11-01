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

planets.forEach(createSelection); // var.forEach(function) this pulles the all the objects from the array making them parameters forEach and exectues the function/parameter

function createSelection(pname) { // function called above which is also the parent of the above arrays
  var option = document.createElement('option'); // brings into exsistence the element option which is attached to the variable option. This is done for clarity
  var dropdownplanets = document.getElementById('planets') // pulls the ID planets from the html 
  dropdownplanets.appendChild(option).innerText = pname[0]; // planet ID is being made the parent of the option element which is binded to the text renderer .innerText = parameter holding planets names and its position in the array [0]
}



function calculateWeight(weight, planetName) { //this function cannot be completed until some variable are defined below. this should run when the button is clicked
  var planetName = document.getElementById('planets').selectedIndex; //this takes the selected planet from the drop down and assigns it a variable
  var newGravity = planets[planetName][1]; //this takes the selected planted and runs it through the array to locate its name and then selects integer position 1

  return weight * newGravity;
}

function handleClickEvent() {//this function is fired when button is clicked
  var weight = parseFloat(document.getElementById('user-weight').value);// var assigned to the value input by the user
  var planetName = document.getElementById('planets').value;// var assigned to the value of the planet selected by user
  var result = calculateWeight(weight, planetName);// the above function given a new name to keep code clear and clean.
  document.getElementById('output').innerHTML = ' If you were on ' + planetName + ',' + ' you would weigh ' + result + 'lbs!';//innerHTML is writing the following string to the ID output in the html file
  document.body.innerHTML = document.body.innerHTML.replace('NaN', '0');//before adding this code above if you had not input a numerical value the input would return NaN now it returns 0
}
