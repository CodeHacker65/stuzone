function parent(){
    window.location="parent.html";
}
function school_1(){
    window.location="school_1.html";
}
function signup(){
    window.location="signup.html";
}
function parent_1(){
    window.location="parent_1.html";
}
function index(){
    window.location="index.html";
}
function parent_confirm(){
    if (document.getElementById("password").value == document.getElementById("password_conf").value){
        window.location="parent_dashboard.html";
    }
    else{
        document.getElementById("nosame").innerHTML="The passwords are not the same!!";
    }
}
function passVis(){
    var x = document.getElementById("password");
    var y = document.getElementById("password_conf");
    var z = document.getElementById("passVis");
  if (x.type === "password" && y.type =="password"){
    x.type = "text";
    y.type = "text";
    z.innerHTML="Hide Password";
  }
  else {
    x.type = "password";
    y.type = "password";
    z.innerHTML="Show Password";
  }
}
function passVis_2(){
  var x = document.getElementById("pass");
  var z = document.getElementById("passVis_2");
if (x.type === "password"){
  x.type = "text";
  z.innerHTML="Hide Password";
}
else {
  x.type = "password";
  z.innerHTML="Show Password";
}
}
var modal = document.getElementById("myModal");

function qr(){
  modal.style.display = "block";
  modal.style.animation="fadein .5s";
}
function cl(){
  modal.style.display = "none";
}
function pareDash(){
  window.location="parent_dashboard.html";
}
function pareProf(){
  window.location="parent_profile.html";
}
function pareRev(){
  window.location="parent_review.html";
}
function accept(){
  window.location="parent_accept.html";
}
function decline(){
  if (document.URL.includes("parent_review.html")){
    window.location="parent_decline.html";
  }
  else{
    window.location="parent_dashboard.html";
  }
}