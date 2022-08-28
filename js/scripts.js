// BUSINESS LOGIC

function beepBoop(inputtedNumber) {

  let retVal = [];
  if (!inputtedNumber) {
    retVal = "Heyyy, you need to submit a number!!!";
    return retVal;
  } else {
  for (let i = 0; i <= inputtedNumber; i++) {

    if (i.toString().includes(3)) {
      retVal.push(" Won't you be my neighbor?");
    } else if (i.toString().includes(2)) {
      retVal.push(" Boop!");
    } else if (i.toString().includes(1)) {
      retVal.push(" Beep!");
    } else {
      retVal.push( " " + i);
    }
  }
  return retVal;
}
}



// USER INTERFACE LOGIC

// function to unhide results after submission
function unhideResults(event) {
  // prevent form from default behavior
  event.preventDefault();
  // get the user input
  const input = parseInt(document.getElementById("userInputNumber").value);

  const div = document.getElementById("hiddenDiv");
  const resultsSpan = document.querySelector("span.showResults");
  const results = beepBoop(input);

  resultsSpan.innerText = results;
  div.removeAttribute("class", "hidden");

}

// function to clear form after submission
function clearForm() {
  document.querySelector("form").reset();
}

 // reset results
 function resetResults(){
  const div = document.getElementById("hiddenDiv");
  div.setAttribute("class", "hidden");

}

//eventListener for load event
window.addEventListener("load", function () {

  let form = document.querySelector("form");
  let secondForm = this.document.getElementById("reset");
  // eventListener to unhide results
  form.addEventListener("submit", unhideResults);
  // eventListener to clear form
  form.addEventListener("submit", clearForm);
  secondForm.addEventListener("click", resetResults);

});