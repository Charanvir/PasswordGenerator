// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()";


// Generate Password Code
function generatePassword() {


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

  // variables that the user will manipulate with the prompts presented
  var generatedPassword = "";
  var criteria = "";

  // criteria for the user to select. when the criteria is true, the corresponing string will be added the overall criteria string
  // when a criteria is selected to be added into the password, the criteria variable is updated to include that data set

  if (includeUpperCase) {
    criteria += upperCase;
  }

  if (includeLowerCase) {
    criteria += lowerCase;
  }

  if (includeNumbers) {
    criteria += numbers;
  }

  if (includeSpecial) {
    criteria += specialCharacters;
  }

  // for loop to generate password depending on selected criteria and the password length entered
  // the passwordLength that was determined earlier is used to tell the loop how many characters to select
  // within the for loop, we are adding a random character from the newly modified criteria dataset into generatedPasswords, by utilizing the chatAt method, which takes an index from a string. 
  // Since we used the Math.random function and multiplied it with the length of criteria, we are telling the loop that for every iteration, add a random character from the criteria string dataset into the generatedPassword string

  for (var i = 0; i < passwordLength; i++) {
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

