// Names and Input
var hacker1;
var hacker2;

function getNameFor(userSlot, role) {
  window[userSlot] = prompt("Enter the " + role + "'s name:");
  console.log("The " + role + "'s name is " + window[userSlot]);
};

getNameFor("hacker1", "driver");
getNameFor("hacker2", "navigator");

// Conditionals
function longestString(name1, name2, role1, role2) {
  if (name1.length === name2.length) {
    console.log("wow, you both got equally long names, " + name1.length + " characters!!");
  } else if (name1.length <= name2.length) {
    console.log("Yo, " + role2 + " got the longest name, it has " + name2.length + " characters"); 
  } else {
    console.log("The " + role1 + " has the longest name, it has " + name1.length + " characters"); 
  }  
};

longestString(hacker1, hacker2, "driver", "navigator");


// Loops
function logToUpperCaseWithSpaces (inputString) {
  var stringToUpperCaseWithSpaces = "";
  for (i = 0; i <= inputString.length -1; i++) {
    stringToUpperCaseWithSpaces += (inputString[i].toUpperCase())+" ";
  }
console.log(stringToUpperCaseWithSpaces);
};

logToUpperCaseWithSpaces(hacker1);

function logReverseString (inputString) {
  var reversedString = "";
  for (i = inputString.length -1; i > -1 ; i--) {
  reversedString += (inputString[i]);
  }
console.log(reversedString);
return reversedString;
};

logReverseString(hacker2);

function firstInLexicalOrder (inputString1, inputString2) {
  switch(inputString1.localeCompare(inputString2)) {
    case 0:
      console.log("What?! You both got the same name?");
      return true;
      break;
    case 1:
      console.log("The driver's name goes first");
      break;
    case -1:
      console.log("Yo, the navigator goes first definitely");
      break;  
  } 
};

firstInLexicalOrder(hacker1, hacker2);

function normalizeText (inputText) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz ';
   i = 0
  while (i < inputText.length) {
    if (alphabet.indexOf(inputText[i].toLowerCase()) === -1) {
      inputText = inputText.slice(0,i)+inputText.slice(i+1);
    } else {
      i++;
    };
  };
  return inputText; 
};


function isPalindrome () {
  var testedString = prompt("Entrez la séquence à tester:");
  testedString = normalizeText(testedString.toLowerCase());
  if (testedString.localeCompare(logReverseString(testedString)) === 0) {
    console.log("That's a nice one, and I've seen a few palindroms in my day");
  } else {
    console.log("Sorry, not this time... Spoonerism maybe?");
  }
  return true;
}

isPalindrome();


function textMiner () {
  var minedString = prompt("Enter a text to process:");
  var searchedTerm = prompt("Which term do you wish to count:");
  minedString = normalizeText(minedString);
  var termArray = minedString.split(" ");
  var termCount = 0;
  console.log("Your text contains " + termArray.length + " terms.");
  for (i = 0 ; i < termArray.length; i++) {
    if (termArray[i] === searchedTerm) {
      termCount++;
    };
  };
  console.log("The term '" + searchedTerm + "' occurs " + termCount + " times in your text!");
  console.log("'"+termArray[termArray.length-1]+"'");
};

textMiner();
};