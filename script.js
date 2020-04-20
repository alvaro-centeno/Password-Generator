var count = document.getElementById("count");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var form = document.getElementById("generate");
var writePassword = document.getElementById("password");

var upperChar = lowToHigh(65, 90);
var lowerChar = lowToHigh(97, 122);
var numChar = lowToHigh(48, 57);
var symbChar = lowToHigh(33, 47).concat(lowToHigh(58, 64)).concat(lowToHigh(91, 96)).concat(lowToHigh(123, 126));


count.addEventListener("input", syncCharCount);
form.addEventListener("submit", e => {
  e.preventDefault()
  var charCount = count.value;
  var uppercase = uppercaseEl.checked;
  var lowercase = lowercaseEl.checked;
  var numbers = numbersEl.checked;
  var symbols = symbolsEl.checked;
  var password = generatePassword(charCount, uppercase, lowercase, numbers, symbols);
  writePassword.innerText = password;
})

function generatePassword(charCount, uppercase, lowercase, numbers, symbols) {
  var charCodes = lowerChar;
  if (lowercase) charCodes = charCodes.concat(lowerChar);
  if (uppercase) charCodes = charCodes.concat(upperChar);
  if (numbers) charCodes = charCodes.concat(numChar);
  if (symbols) charCodes = charCodes.concat(symbChar);

  var pwdChar = [];
  for (var i = 0; i < charCount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    pwdChar.push(String.fromCharCode(characterCode));

  }
  return pwdChar.join("");
}

function lowToHigh(low, high) {
  var array = [];
  for (var i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharCount(e) {
  var value = e.target.value;
  count.value = value;
}
