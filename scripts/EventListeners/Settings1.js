function borderSelect() {

  const border11 = document.getElementById("border11");

  function getBorder11() {
      window.location.href = "/html/notifications/Settings2.html";
  }

  border11.addEventListener("click", getBorder11);

}

borderSelect();

function profileSelect() {

  const profile = document.getElementById("profile");

  function getProfile() {
      window.location.href = "/html/notifications/personal.html";
  }

  profile.addEventListener("click", getProfile);

}

profileSelect();

function contactUsSelect() {

  const contactUs = document.getElementById("contactUs");

  function getContact() {
      window.location.href = "/html/notifications/contact.html";
  }

  contactUs.addEventListener("click", getContact);

}

contactUsSelect();