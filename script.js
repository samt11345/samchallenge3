// Assignment Code
var generateBtn = document.querySelector("#generate");
function  generatePassword(){
  var characterArray = ""
  //ask user for password length
  var passLength = parseInt(prompt("enter your desired password length (between 8 and 12):"))
 
  if (isNaN(passLength) || passLength < 8 || passLength >128) {
    alert("invalid input");
    return;
  }
  //ask user to okay lower case characters
  var lowerCaseOk = confirm("would you like lower case letters")
  var upperCaseOk = confirm("would you like upper case letters")
  var numberOk = confirm("would you like numbers")
  var specCharOk = confirm("would you like special characters")

  while(!(upperCaseOk||lowerCaseOk||numberOk||specCharOk)){
    alert ("you have to pick one")
    var lowerCaseOk = confirm("would you like lower case letters")
    var upperCaseOk = confirm("would you like upper case letters")
    var numberOk = confirm("would you like numbers")
    var specCharOk = confirm("would you like special characters")
   
  }
 
  if(lowerCaseOk === true){ 
    
   characterArray = characterArray.concat( "abcdefghijklmnopqrstuvwxyz")
   //add lower case characters to empty array
  }
  if(upperCaseOk===true){
    characterArray = characterArray.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }
  if(numberOk ===true){
    characterArray = characterArray.concat("1234567890")
  }
  if(specCharOk===true){
    characterArray = characterArray.concat("!@#$%^")
  }

  
  
  characterArray = characterArray.split("")
  //ask user to okay upper case characters
  var results = ""
 for(var i = 0; i < passLength; i++) {
  var index = Math.floor(Math.random()*characterArray.length)
var digit = characterArray[index]
results += digit
 }
  //ask user to okay special characters case characters
  //ask user to okay numbers characters

  return results

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
