var bee = document.getElementById("bee");
   document.addEventListener("mousemove", getMouse);

   bee.style.position = "absolute"; //css
   var beepos = {x:0, y:0};

   setInterval(followMouse, 50);

   var mouse = {x:0, y:0}; //mouse.x, mouse.y

   var dir = "right";
   function getMouse(e){
     var image = document.getElementById('bird-image');

     image.src = "http://i64.tinypic.com/350s181.png";
     mouse.x = e.pageX;
     mouse.y = e.pageY;
       //Checking directional change
       if(mouse.x > beepos.x){
         dir = "right";
       } else {
         dir = "left";
       }
   }

   function followMouse(){
     //1. find distance X , distance Y
     var distX = mouse.x - beepos.x;
     var distY = mouse.y - beepos.y;
     //Easing motion
      //Progressive reduction of distance
     beepos.x += distX/5;
     beepos.y += distY/2;

     bee.style.left = beepos.x + "px";
     bee.style.top = beepos.y + "px";


       //Apply css class
       if (dir == "right"){
         bee.setAttribute("class", "right");
       } else {
         bee.setAttribute("class", "left");
       }

   }

   document.onmousemove = (function() {
     var image = document.getElementById('bird-image');

    var onmousestop = function() {
            $("#bird-image").fadeOut("fast");
          setTimeout(function(){
            $("#bird-image").fadeIn("fast");
            image.src = "images/still-cockatoo.png";
          }, 150);

    }, thread;

    return function() {
      clearTimeout(thread);
      thread = setTimeout(onmousestop, 300);
    };
  })();




// var myListener = function () {
//     // document.removeEventListener('mousemove', myListener, false);
//     console.log("poop")
//     var poop = "poop";
//     checkforpoop(poop);
// };
//
// function checkforpoop() {
//   if (poop == "poop") {
//     console.log("mouse is moving");
//     var poop = "nopoop";
//   } else {
//     console.log("Mouse is stopped");
//   }
// };
//
//
// document.addEventListener('mousemove', myListener, true);
