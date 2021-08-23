# password_generator

This is a simple password generator webapp created in javascript. I built this during my coding bootcamp at UC Irvine while learning javascript.

## What it does:
The user can generate a randomly generated password by clicking "Generate Password." From there a series of prompts come up asking about their character requirements (lowercase, uppercase, numbers, special characters) and length. Once the prompts are completed, a randomly generated password is presented for them to copy and paste.

View it at: https://jacobzavita.github.io/password_generator/
![Screen Shot 2021-08-23 at 10 18 02 AM](https://user-images.githubusercontent.com/81720959/130489518-7204f56f-352f-4ff4-a760-788bbe81e296.png)

# Contents of Project
This project contains an index.html file, script.js file, and style.css file.

# Technologies used
HTML, CSS, JavaScript

# Goals for Project
Here is the story I was prompted with to build this:
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

# How It Works

Use is brought to a page with a text area and a button reading "Generate Password"

When the button is clicked, the user is asked to select the character sets they'd like included in the password. Options are uppercase, lowercase, numbers, and special characters. Once they have selected the character sets, the javascript combines the chosen character sets into a large array.

User is then prompted to choose who long they'd like the password to be. It must be between 8 and 128 characters. If they provide a number outside of that range, they are asked to provide a number in that range.

Once the range is set, characters of each type are randomly selected from the large array.

The randomly generated password is then presented to the user in the text area so they can access it.
