// BUSINESS LOGIC

function beepBoop(event, input, results) {
  // prevent form from default behavior  
  event.preventDefault();
  // get the user input
  input = parseInt(document.getElementById("userInputNumber").value);
  // target the paragraph to show results
  results = document.getElementById("results");

  let numberToArray = [];
  for (let index = 0; index <= input; index += 1){
      numberToArray.push(index);
  };
 return results.append(numberToArray);
}




// USER INTERFACE LOGIC

// function to clear form after submission
function clearForm() {
  document.querySelector("form").reset();
};

// function to unhide results after submission
function unhideResults() {
  document.getElementById("hiddenDiv").removeAttribute("class","hidden");
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

 