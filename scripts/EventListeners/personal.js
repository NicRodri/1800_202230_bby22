const profileInfo = document.getElementById("profile-information");
const profileSubmit = document.getElementById("submit1");
const names = document.getElementById("names");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const genderMale = document.getElementById("setD_male");
const genderFemale = document.getElementById("setD_female");
const online = document.getElementById("setD_online");
const offline = document.getElementById("setD_offline");
const doNotDisturb = document.getElementById("setD_doNotDisturb");



profileSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
  
  
  
        var uid = user.uid;
  
        console.log(uid);
  
        db.collection("users").doc(uid).collection("profile").doc().set({
          // Can be changed for different forms
          name: names.value,
          email: email.value,
          phone: phone.value,
          male: genderMale.value,
          female: genderFemale.value,
          online: online.value,
          offline: offline.value,
          do_not_disturb: doNotDisturb.value,
          
        })
          .then(() => {
            profileInfo.reset();
            window.location.href = "/html/main.html";
          });
  
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  });
  