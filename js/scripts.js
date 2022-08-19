function beepBoop(event,input) {
  // prevent form from default behavior  
  event.preventDefault();
  let inputToArray = input.split();
  let retVal = parseInt(inputToArray);
  return retVal;
}



// function to clear form after submission
function clearForm() {
  document.querySelector("form").reset();
};

//eventListener for load event
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  // eventListeners for submit event
  form.addEventListener("submit", beepBoop);
  form.addEventListener("submit", clearForm);
  });