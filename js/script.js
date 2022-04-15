'use strict'
// Volume of sphere calculator
function enterClicked () {

  // get radius from text field
  let radius = parseFloat(document.getElementById("radius").value)

  // calculate volume of sphere
  let volume = (4/3) * Math.PI * radius;
 
  document.getElementById('user-info').innerHTML = "The volume of your sphere is " + volume.toFixed(2) + " m<sup>3</sup>"
}
