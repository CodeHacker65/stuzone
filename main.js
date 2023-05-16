function parent(){
    window.location="parent.html";
}
function school_1(){
    window.location="school_1.html";
}
function signup(){
    window.location="signup.html";
}
function parPass(){
  window.location="parent_password.html";
}
function schoPass(){
  window.location="school_password.html";
}
function index(){
  window.location="index.html";
}
function parent_confirm(){
  if (document.getElementById("password").value == document.getElementById("password_conf").value 
     && document.getElementById("password").value != ""
     && document.getElementById("password_conf").value != ""){
    window.location="school_verify.html";
  }
  else if(document.getElementById("password").value == "" && document.getElementById("password").value == ""){
    document.getElementById("nosame").innerHTML="The passwords can't be empty!!";
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
function schoVerify(){
  if (document.getElementById("password").value == document.getElementById("password_conf").value 
     && document.getElementById("password").value != ""
     && document.getElementById("password_conf").value != ""){
    window.location="school_verify.html";
  }
  else if(document.getElementById("password").value == "" && document.getElementById("password").value == ""){
    document.getElementById("nosame").innerHTML="The passwords can't be empty!!";
  }
  else{
    document.getElementById("nosame").innerHTML="The passwords are not the same!!";
  }
}
function item(){
  window.location="school_item.html";
}
function home(){
  window.location="school_dashboard.html";
}
function modify(){
  document.getElementById("add").style.display="none";
  document.getElementById("modify").style.display="block";
}
function add(){
  var amt = document.getElementById("amt").innerHTML;
  amt=Number(amt);
  amt++;
  amt=String(amt)
  document.getElementById("amt").innerHTML=amt;
}
function minus(){
  var amt = document.getElementById("amt").innerHTML;
  amt=Number(amt);
  if(amt != 0){
    amt--;
  }
  amt=String(amt)
  document.getElementById("amt").innerHTML=amt;
}
function schoProf(){
  window.location="school_profile.html";
}
function additem(){
  window.location="school_additem.html";
}
function cart(){
  window.location="school_cart.html";
}
function confirm(){
  window.location="school_confirmation.html";
}