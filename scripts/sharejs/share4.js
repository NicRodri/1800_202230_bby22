const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("emailAddress");
const phoneNumber = document.getElementById("phoneNumber");
const infoSubmit = document.getElementById("submit");

infoSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User



      var uid = user.uid;

      console.log(uid);

      db.collection("users").doc(uid).collection("contacts").doc().set({
        // Can be changed for different forms
        firstName: firstName.value,
        lastName: lastName.value,
        emailAddress: emailAddress.value,
        phoneNumber: phoneNumber.value,
        
      })
        .then(() => {
          firstName.reset();
          window.location.href = "/html/main.html";
        });

      // ...
    } else {
      // User is signed out
      // ...
    }
  });
});


