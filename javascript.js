document.getElementById('generate')

// When button is clicked, generate new password based on users desired character set and length.
generate.addEventListener("click", function () {

  // Ask user which character sets they'd like included in their password. Ask them if the want the password to include lower case, upper case, numbers, and special characters.

  let lowerCaseYes = confirm('Do you want to include lowercase characters? Click "Ok" for yes, "cancel" for no.')

  let upperCaseYes = confirm('Do you want to include uppercase characters? Click "Ok" for yes, "cancel" for no.')

  let numsYes = confirm('Do you want to include numbers? Click "Ok" for yes, "cancel" for no.')

  let specialYes = confirm('Do you want to include special characters? Click "Ok" for yes, "cancel" for no.')

  // Create each character set
  let lowerChars = 'abcdefghijklmnopqrstuvwxyz'
  let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numChars = '0123456789'
  let specChars = '!@#$%^&*()_+{}:<>?,./;'

  // chosenArray will be the array their selected character sets are added to. This is the array that will be randomly selected through.
  let chosenArray = []

  // Add character sets to the chosenArray based on what they selected earlier.
  if (lowerCaseYes) { chosenArray += lowerChars }
  if (upperCaseYes) { chosenArray += upperChars }
  if (numsYes) { chosenArray += numChars }
  if (specialYes) { chosenArray += specChars }

  // finalArray formats the array with commas between each character.
  let formattedArray = chosenArray.split('')

  // passwordGeneration is the array the randomly selected characters will be added to based on the user's chosen length.
  let passwordGeneration = []

  // length asks the user how long they want their password. It limits the option to 8-128 and confirms that the user input is within that range. If it is not within that range, it prompts the user to enter a number within that range.
  let length = parseInt(prompt('How long do you want your password? Must be between 8 and 128 characters.'))
  if (length < 8 || length > 128 || length === NaN || length === null) {
    alert('Must be between 8 and 128 characters')
    length = parseInt(prompt('How long do you want your password? Must be between 8 and 128 characters.'))
  } else {
    return length
  }

  // Now that we know how long they would like the password, this for loop randomly selects from the formattedArray and pushes that randomly selected character to passwordGeneration.

  for (i = 0; i < length; i++) {
    passwordGeneration.push(formattedArray[Math.floor(Math.random() * formattedArray.length)])
  }

  // console.log to test it worked. Use join method to remove commas. Add final password via passwordGeneration to the text box on the html.
  // console.log(passwordGeneration.join(''))
  document.getElementById('password').innerHTML = passwordGeneration.join('')

}
)

// Tada!