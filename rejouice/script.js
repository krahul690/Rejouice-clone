 var page1Content = document.querySelector("#page1-contain");
 var cuser = document.querySelector("#curser");

 page1Content.addEventListener("mousemove", function (dets) {
    //  console.log(dets); //dets is nothig is a name
     
    //  cuser.style.left = dets.x + "px"
    //       cuser.style.top = dets.y + "px";
 gsap.to(curser, {
   x:dets.x,
   y:dets.y
 });

 
 
 });


