// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()";


// Generate Password Code
function generatePassword() {
  var generatedPassword = "";
  var criteria = "";

  // prompt user to input how long they want their password to be

  var passwordLength = prompt("How long would you like your password to be. Please select between 8 and 128 characters")
  while (passwordLength > 128 || passwordLength < 8 || passwordLength === null) {
    alert("Please select a number between 8 and 128");
    var passwordLength = prompt("How long would you like your password to be. Please select between 8 and 128 characters");
  }

  // code to allow user to select criteria
  var includeUpperCase = confirm("Would you like your password to include UPPERCASE letters? Press OK to incude and cancel to exclude");
  var includeLowerCase = confirm("Would you like your password to include LOWERCASE letters? Press OK to incude and cancel to exclude");
  var includeNumbers = confirm("Would you like your password to include NUMBERS? Press OK to incude and cancel to exclude");
  var includeSpecial = confirm("Would you like your password to include SPECIAL CHARACTERS? Press OK to incude and cancel to exclude");

  // while statement to inform user that atleast one of the criteria must be selected to continue

  while (includeUpperCase === false && includeLowerCase === false && includeNumbers === false && includeSpecial === false) {
    alert("Must select atleast one of the criteria to generate a password!!")
    var includeUpperCase = confirm("Would you like your password to include UPPERCASE letters? Press OK to incude and cancel to exclude");
    var includeLowerCase = confirm("Would you like your password to include LOWERCASE letters? Press OK to incude and cancel to exclude");
    var includeNumbers = confirm("Would you like your password to include NUMBERS? Press OK to incude and cancel to exclude");
    var includeSpecial = confirm("Would you like your password to include SPECIAL CHARACTERS? Press OK to incude and cancel to exclude");
  }

  // criteria for the user to select. when the criteria is true, the corresponing string will be added the overall criteria string

  if (includeUpperCase) {
    criteria += upperCase;
    generatedPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
  }

  if (includeLowerCase) {
    criteria += lowerCase;
    generatedPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  }

  if (includeNumbers) {
    criteria += numbers;
    generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  if (includeSpecial) {
    criteria += specialCharacters;
    generatedPassword += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
  }

  // for loop to generate password depending on selected criteria and the password length entered

  for (var i = generatedPassword.length; i < passwordLength; i++) {
    generatedPassword += criteria.charAt(Math.floor(Math.random() * criteria.length));
  }

  // return value to be inputted into the writePassword function to display on the HTML

  return generatedPassword;
};


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

