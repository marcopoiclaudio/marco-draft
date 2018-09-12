var input = document.getElementById('pw-input');
var button = document.getElementById('button');
var errorMessage = document.getElementById('error-message');
// console.log(input.value);

button.addEventListener('click', function(e){
    checkPw();
;}, false);

function checkPw() {
  console.log(input.value);

  if (input.value == "passeggiami") {
      errorMessage.innerHTML = "Well done you got it correct!";

      setTimeout(changeThePage(), 30000);
  } else {
    errorMessage.innerHTML = "You meant Conor is a twat";
  };
};

function changeThePage() {
url = window.location.href;
url = url.replace(/\/[^\/]*$/, '/index.html');
window.location.href = url;
};
