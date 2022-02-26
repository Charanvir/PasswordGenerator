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
  while (passWordLength > 128 || passWordLength < 8) {
    alert("Password must be between 8 and 128 characters")
    var passWordLength = prompt("Please select a password length between 8 and 128");
  }
  var password = "";



  for (var i = 0; i < passWordLength; i++)
    password += fullDataBase.charAt(Math.floor(Math.random() * fullDataBase.length));


  return password;
}


var fullDataBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var upperCaseOnly = "ABCDEFGHIJKLMOPWRSTUVWXYZ";
var lowerCaseOnly = 'abcedfghijklmnopqrstuvwxyz';
var numbersOnly = "0123456789";
var specialCharactersOnly = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"