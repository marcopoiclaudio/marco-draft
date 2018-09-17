window.onload = checkForCookie();

function changeThePage() {
  url = window.location.href;
  url = url.replace(/\/[^\/]*$/, '/splash.html');
  window.location.href = url;
};

function checkForCookie(){
  var authCooke = localStorage.getItem("auth");
    if (authCooke == 'true') {
    }  else if (authCooke = "null"){
      changeThePage();
    }
};
