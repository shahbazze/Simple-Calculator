// Get the display element
const src = document.querySelector(".display-IO-text");

// Initialize variables to store numbers and operation
let num1 = [];
let num2 = [];
let operation = "";
let result;

// Get the parent container for event delegation
const inputBtnParent = document.querySelector(".input-btn-parent");

// Add event listener to the parent container
inputBtnParent.addEventListener("click", function (e) {
  // Check if the clicked element has the class 'num'
  if (e.target.classList.contains("num")) {
    // Access the inner text of the clicked element
    const numValue = e.target.innerText;

    // Function to update display with current input
    function update() {
      let input1 = num1.join("");
      let input2 = num2.join("");
      src.innerHTML = input1 + operation + input2;
    }

    // If numValue is a number
    if (!isNaN(numValue)) {
      if (operation === "") {
        // If no operation selected, add to num1
        num1.push(numValue);
        update();
      } else {
        // If operation selected, add to num2
        num2.push(numValue);
        update();
      }
    } 
    // If numValue is "C" (clear)
    else if (numValue === "C") {
      // Clear display and reset variables
      src.innerHTML = "";
      num1 = [];
      num2 = [];
      operation = "";
    } 
    // If numValue is an operation
    else {
      if (numValue === "=") {
        // Calculate result if "=" is clicked
        calculate();
      } else {
        // Set operation if other operation clicked
        operation = numValue;
        update();
      }
    }
  }
});

// Function to perform calculation
function calculate() {
  // Perform calculation only if numbers and operation are provided
  if (num1.length > 0 && num2.length > 0 && operation !== "") {
    // Convert arrays to integers and perform operation
    switch (operation) {
      case "+":
        result = parseInt(num1.join("")) + parseInt(num2.join(""));
        break;
      case "-":
        result = parseInt(num1.join("")) - parseInt(num2.join(""));
        break;
      case "*":
        result = parseInt(num1.join("")) * parseInt(num2.join(""));
        break;
      case "%":
        result = parseInt(num1.join("")) / parseInt(num2.join(""));
        result=result.toFixed(0);
        break;
      default:
        console.log("Invalid operation");
        return; // Exit the function if the operation is invalid
    }
    // Display the result
    src.innerHTML = result;
    // Reset variables for next calculation
    num1 = [];
    num2 = [];
    operation = "";
  } else {
    // Alert for invalid input
    alert("Enter valid input");
  }
}
