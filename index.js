document.addEventListener("DOMContentLoaded", function () {
  // Get the output textarea
  var output = document.getElementById("output");

  // Get all the calculator buttons
  var buttons = document.querySelectorAll(".input");
  var check = true;

  // Add click event listener to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the text content of the clicked button
      var buttonText = button.textContent;

      // Handle different button actions
      switch (buttonText) {
        case "C":
          // Clear the output
          output.value = "0";
          break;

        case "D":
          // Delete the last character from the output
          output.value = output.value.slice(0, -1);

          //if output has no value it add value has 0
          if (output.value == "") {
            output.value += "0";
          }
          if (
            ![
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "0",
              ".",
              "+",
              "-",
              "*",
              "/",
            ].includes(output.value.slice(-1))
          ) {
            output.value = "0";
          }
          break;

        case "+-":
          if (output.value === "Error") {
            output.value = 0;
          }

          if (check) {
            output.value = "-" + output.value;
            check = false;
          } else {
            output.value = output.value.slice(1);
            check = true;
          }
          break;

        case "+":
          if (output.value === "Error") {
            output.value = 0;
          }

          if (output.value.slice(-1) == "+") {
          } else if (
            output.value.slice(-1) == "-" ||
            output.value.slice(-1) == "*" ||
            output.value.slice(-1) == "/"
          ) {
            output.value = output.value.slice(0, -1) + "+";
          } else {
            output.value += "+";
          }
          break;

        case "-":
          if (output.value === "Error") {
            output.value = 0;
          }

          if (output.value.slice(-1) == "-") {
          } else if (
            output.value.slice(-1) == "+" ||
            output.value.slice(-1) == "*" ||
            output.value.slice(-1) == "/"
          ) {
            output.value = output.value.slice(0, -1) + "-";
          } else {
            output.value += "-";
          }
          break;

        case "*":
          if (output.value === "Error") {
            output.value = 0;
          }

          if (output.value.slice(-1) == "*") {
          } else if (
            output.value.slice(-1) == "+" ||
            output.value.slice(-1) == "-" ||
            output.value.slice(-1) == "/"
          ) {
            output.value = output.value.slice(0, -1) + "*";
          } else {
            output.value += "*";
          }
          break;

        case "/":
          if (output.value === "Error") {
            output.value = 0;
          }

          if (output.value.slice(-1) == "/") {
          } else if (
            output.value.slice(-1) == "+" ||
            output.value.slice(-1) == "-" ||
            output.value.slice(-1) == "*"
          ) {
            output.value = output.value.slice(0, -1) + "/";
          } else {
            output.value += "/";
          }
          break;

        case ".":
          if (output.value === "Error") {
            output.value = 0;
          }

          if (output.value.slice(-1) == ".") {
          } else {
            output.value += ".";
          }
          break;

        case "=":
          // Calculate the result
          try {
            output.value = eval(output.value);
          } catch (error) {
            // Display error if evaluation fails
            output.value = "Error";
          }
          break;

        default:
          // Append the button text to the output
          if (output.value === "0" || output.value === "Error") {
            output.value = buttonText;
          } else {
            output.value += buttonText;
          }
          break;
      }
    });
  });
});
