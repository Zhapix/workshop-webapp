// Function to check if a number is even
function checkSum() {  
  // Get the values from input boxes and convert to integers, defaulting to 0 if empty
  const num1 = parseInt(document.getElementById('num1').value) || 0;
  const num2 = parseInt(document.getElementById('num2').value) || 0;

  // Calculate the sum
  const sum = num1 + num2;

  //  // Check if the sum is even or odd using modulo operator
  const result = sum % 2 === 0 ? "even" : "odd";

   //Display the result
  document.getElementById("evenResult").textContent =    
  `The sum of ${num1} and ${num2} is ${sum}, which is ${result}. `;
  }

// Function to find the maximum of two numbers
function findMax() {
   // Get values from input boxes and convert to numbers
  const a = Number(document.getElementById("numA").value);
  const b = Number(document.getElementById("numB").value);
  // Compare the two values and assign the larger to 'max'
     const max = a > b ? a : b;
      // Display the result in the element with id 'maxResult
    document.getElementById('maxResult').textContent = 
      `The Maixmum of a and {b} is ${max} `;
    }
   

  // Function to swap two numbers without a third variable
  function swapNumbers() {
    // Get the values from the input boxes and convert to numbers
    let a = Number(document.getElementById("swapA").value);
    let b = Number(document.getElementById("swapB").value);
   // Swapping logic would go here (currently not implemented)
    // Example (uncomment to use):
       
        a = a + b;
        b = a - b;
        a = a - b;
            // Update the input fields with swapped values (if implemented)
        document.getElementById('swapResult').textContent = `After swap: A = ${a}, B = ${b}`;
      }
  // Function to count the number of vowels in a string
  function countVowels() {
      // Get the string input from the element with id 'vowelInput'
    const str = document.getElementById("vowelInput").value;
        // Initialize a counter for vowels
    let count = 0;
     // Define all vowels (both lowercase and uppercase)
    const vowels = "aeiouAEIOU";
    // Loop through each character in the input string
    for (let char of str) {
       // Check if the character is a vowel
      if (vowels.includes(char)) {
        count++; // Increment the vowel count
      }
    }
      // Display the number of vowels in the element with id 'vowelResult'
    document .getElementById('vowelResult').textContent = `Number of vowels: ${count}` ;

  }
  // reverse 
  // // Function to reverse a string
  function Reverse() {
      // Get the input string from the element with id 'reverseInput'
    const str = document.getElementById("reverseInput").value;
       // Split the string into an array of characters, reverse the array, and join it back into a string
    const reversed = str.split("").reverse().join("");
     // Display the reversed string in the element with id 'reverseResult'
    document . getElementById('reverseResult').textContent = `Reverse String: ${reversed}` ;
  }

  function mergeAndSortUnique(arr1, arr2) {
    // Step 1: Combine both arrays into one
    var combined = arr1.concat(arr2);

    // Step 2: Initialize an empty array to store unique values
    var uniqueArray = [];

    // Step 3: Loop through the combined array
    for (var i = 0; i < combined.length; i++) {
        var current = combined[i];
        if (uniqueArray.indexOf(current) === -1) {
            uniqueArray.push(current);
        }
    }

    // Step 4: Sort the array in ascending order
    uniqueArray.sort(function(a, b) {
        return a - b;
    });

    // Step 5: Return the final sorted array with unique values
    return uniqueArray;
}

// Example usage:
var arr1 = [2, 3, 5];
var arr2 = [2, 4, 1, 5, 6, 4];
console.log(mergeAndSortUnique(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]


  // When the page is fully loaded, attach click event listeners to buttons
  document.addEventListener("DOMContentLoaded", function () {   
    document.getElementById("evenBtn").addEventListener("click", checkSum);   // When 'evenBtn' is clicked, call the checkSum function
    document.getElementById("maxBtn").addEventListener("click", findMax);     // When 'maxBtn' is clicked, call the findMax function
    document.getElementById("swapBtn").addEventListener("click", swapNumbers); // when 'swapBtn' is clicked, call the swapNumbers function
    document.getElementById("countBtn").addEventListener("click", countVowels); // when 'countBtn' is clicked, call the countVowels function
    document.getElementById("reverBtn").addEventListener("click", Reverse); // when 'reverBtn' is clicked , call the Reverse function function
    
      });
