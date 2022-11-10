const profileInfo = document.getElementById("profile-information");
const profileSubmit = document.getElementById("submit1");
const names = document.getElementById("names");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementById("setD");
const light = document.getElementById("setD1");



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
          gender: gender.value,
          lighting: light.value,
          
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
  