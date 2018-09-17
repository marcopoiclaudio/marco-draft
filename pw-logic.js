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
      errorMessage.innerHTML = "Siiiiiiiii!";
      localStorage.setItem("auth", true);

      setTimeout(changeThePage(), 30000);
  } else {
    errorMessage.innerHTML = "Tu sbaglia tu uccide i petini";
  };
};

function changeThePage() {
url = window.location.href;
url = url.replace(/\/[^\/]*$/, '/index.html');
window.location.href = url;
};


input.addEventListener("keyup", function(e){
  e.preventDefault();

  if (event.keyCode === 13) {
    checkPw();
  };
});
