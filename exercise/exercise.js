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
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
    // let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // let splitAlphabet = alphabet.split("");
    const uniqueLetters = cleanSentence.split("");

    if (alphabet.every((char) => uniqueLetters.includes(char))) {
      return true
    }else{
      return false
    }
    
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog"));
  console.log(isPangram("This is not a pangram."));
  