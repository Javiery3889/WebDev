var navButton = document.querySelector("#ham-icon i");
function myFunction(){
    var nav = document.querySelector("header nav ul");
    if (nav.style.display === "block") {
        nav.style.display = "";
    } else {
        nav.style.display = "block";
    }
}
if (navButton.addEventListener) {
    navButton.addEventListener("click", myFunction, false);
}  else if (navButton.attachEvent) {
    navButton.attachEvent("onclick", myFunction, false);
}
