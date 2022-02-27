// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passWordLength = prompt("Please select a password length between 8 and 128");
  while (passWordLength > 128 || passWordLength < 8 || passWordLength === null) {
    alert("Password must be between 8 and 128 characters")
    var passWordLength = prompt("Please select a password length between 8 and 128");
  }
  var includeUpperCase = window.confirm("Would you like to include upper case letters? Press Ok to include and cancel to not include")
  if (includeUpperCase) {

    password = allCharacters.push(upperCase);
  } else {
    password = allCharacters;
  };


  var includeLowerCase = window.confirm("Would you like to include lower case letters? Press Ok to include and cancel to not include")
  if (includeLowerCase) {

    password = allCharacters.push(lowerCase);
  } else {
    password = allCharacters;
  };


  var includeNumbers = window.confirm("Would you like to include numbers? Press Ok to include and cancel to not include")
  if (includeNumbers) {

    password = allCharacters.push(numbers);
  } else {
    password = allCharacters;
  };


  var includeSpecialCharacters = window.confirm("Would you like to include special characters? Press Ok to include and cancel to not include")
  if (includeSpecialCharacters) {

    password = allCharacters.push(specialCharacters);
  } else {
    password = allCharacters;
  };



  return password;

}


var allCharacters = ["HELLO"];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-'];