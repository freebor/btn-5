function maskify(cc) {
    // Check if the input is empty or has less than 4 characters
    if (cc.length <= 4) {
      return cc; // Return the original input as it is
    } else {
      // Replace all characters except the last 4 with "#"
      return '#'.repeat(cc.length - 4) + cc.slice(-4);
    }
  }
  
  // console.log(maskify('4556364607935616')); // Output: "############5616"
  

  function isPangram(string) {
    // Remove non-alphabet characters and convert to lowercase
    const cleanSentence = string.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let splitAlphabet = alphabet.split("");
    const uniqueLetters = cleanSentence.split("");

    if (splitAlphabet.every((char) => uniqueLetters.includes(char))) {
      return true
    }else{
      return false
    }
    
  }

  // console.log(isPangram("The quick brown fox jumps over the lazy dog"));
  // console.log(isPangram("This is not a pangram."));
  

  function formatPhoneNumber(numbers) {
    const formattedNumber = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

    if (numbers.length !== 10) {
      return "numbers should not be above 10 digits";
    }
    return formattedNumber;
  }
  
  // Example usage:
// console.log(formatPhoneNumber([2, 3, 4, 4, 5, 6, 7, 8, 9, 0])); // Output: (123) 456-7890


function breakCamelCase(inputString) {
  let result = "";
  
  for (let i = 0; i < inputString.length; i++){
    
    const currentChar = inputString[i];
    // Check if the current character is lowercase and the next character is uppercase
    if (currentChar == currentChar.toUpperCase()){
      result+= " ";
    }
    result += currentChar   
  };                      
  
  return result;
}

// Example usage:
// console.log(breakCamelCase("thisIsCamelCase")); // Output: "this Is Camel Case"


function formatTime(seconds) {
  if (seconds < 0) {
    return "Invalid input"; // Handle negative input if needed
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


// Example usage:
// const seconds =  4; // Replace with your desired number of seconds
// const formattedTime = formatTime(seconds);
// console.log(formattedTime); // Output: "01:01:01"


function findPeaks(arr) {
  const peaks = [];
  const positions = [];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      peaks.push(arr[i]);
      positions.push(i);
    }
  }

  return { pos: positions, peaks };
}

// Example usage:
const numericArray = [1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3];
const result = findPeaks(numericArray);
console.log(result);



