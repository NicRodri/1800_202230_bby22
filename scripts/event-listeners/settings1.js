
//EventListener to lead user to notifications page.
function borderSelect() {

  const border11 = document.getElementById("border11");

  function getBorder11() {
      window.location.href = "/html/notifications/settings2.html";
  }

  border11.addEventListener("click", getBorder11);

}

borderSelect();


//EventListener to lead user to personal page.
function profileSelect() {

  const profile = document.getElementById("profile");

  function getProfile() {
      window.location.href = "/html/notifications/personal.html";
  }

  profile.addEventListener("click", getProfile);

}

profileSelect();


//EventListener to lead user to contact page.
function contactUsSelect() {

  const contactUs = document.getElementById("contactUs");

  function getContact() {
      window.location.href = "/html/notifications/contact.html";
  }

  contactUs.addEventListener("click", getContact);

}

contactUsSelect();


//EventListener to lead user to logout.
function logoutSelect1() {
  const logout = document.getElementById("logout");

  function getlogout() {
      window.location.href = "/html/login.html";
  }

  logout.addEventListener("click", getlogout);
}

logoutSelect1();