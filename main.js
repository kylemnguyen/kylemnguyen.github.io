var slideIndex = 1;
var projectOneIndex = 1;
showDivs(slideIndex);
showProjectOne(projectOneIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function addProjectOne(n) {
  showProjectOne(projectOneIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function showProjectOne(n) {
  var i;
  var x = document.getElementsByClassName("project1-images");
  if (n > x.length) {projectOneIndex = 1}
  if (n < 1) {projectOneIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[projectOneIndex-1].style.display = "block";
}