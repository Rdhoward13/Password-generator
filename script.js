// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "1234567890".split("")
var symbols = "!@#$%^&*()".split("")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var beforeReadyPassword = [];
  var readyPassword = ""
  var passwordLength = prompt("How many characters would you like your password to be?\n8-128")

  if (passwordLength > 128 || passwordLength < 8) {
    alert("Your password must be between 8 and 128 characters.")
    writePassword()
  } else {
    if(confirm("Would you like lower case letters in your password?")) {
      beforeReadyPassword = beforeReadyPassword.concat(lowerCase) 
    }
    if(confirm("Would you like upper case letters in your password?")) {
      beforeReadyPassword = beforeReadyPassword.concat(upperCase) 
    }
    if(confirm("Would you like numbers in your password?")) {
      beforeReadyPassword = beforeReadyPassword.concat(numbers) 
    }
    if(confirm("Would you like symbols in your password?")) {
      beforeReadyPassword = beforeReadyPassword.concat(symbols) 
    }
    if(beforeReadyPassword.length === 0) {
      alert("You must have atleast one type of character to create a password.")
      writePassword()
    } else {
      for (var i = 0; i < passwordLength; i++) {
        var pickRandom = Math.floor(Math.random() * beforeReadyPassword.length)
        readyPassword += beforeReadyPassword[pickRandom]
      }
    }
  }
document.getElementById("password").innerHTML = readyPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
