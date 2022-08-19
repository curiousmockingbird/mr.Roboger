// BUSINESS LOGIC
let results;
function beepBoop(event, input, results) {
  // prevent form from default behavior
  event.preventDefault();
  // get the user input
  input = parseInt(document.getElementById("userInputNumber").value);

  let numberToArray = [input];
  for (let index = 0; index <= input; index += 1) {
    if (numberToArray.includes(2)){
      console.log(numberToArray);
    }
  }
    
    for (let index = 0; index <= input; index += 1) {
    numberToArray.push(index);
  }

return numberToArray;
}

// USER INTERFACE LOGIC
let h1 = getElementById("h1Results");
let results = document.createElement("p");
h1.after(results);

// function to clear form after submission
function clearForm() {
  document.querySelector("form").reset();
}

// function to unhide results after submission
function unhideResults() {
  document.getElementById("hiddenDiv").removeAttribute("class", "hidden");
}

//eventListener for load event
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  // eventListeners for submit event
  form.addEventListener("submit", beepBoop);
  // eventListeners to clear form
  form.addEventListener("submit", clearForm);
  // eventListeners to unhide results
  form.addEventListener("submit", unhideResults);
});
