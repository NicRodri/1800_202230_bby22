const contactsInfo = document.getElementById("contact-information");
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
          contactsInfo.reset();
          window.location.href = "/html/share/index5.html";
        });

      // ...
    } else {
      // User is signed out
      // ...
    }
  });
});

function showUploadedPicture(){
  const fileInput = document.getElementById("mypic-input");   // pointer #1
  const image = document.getElementById("mypic-goes-here");   // pointer #2

  //attach listener to input file
  //when this file changes, do something
  fileInput.addEventListener('change', function(e){

      //the change event returns a file "e.target.files[0]"
      var blob = URL.createObjectURL(e.target.files[0]);

      //change the DOM img element source to point to this file
      image.src = blob;    //assign the "src" property of the "img" tag
  })
}
showUploadedPicture();

function uploadContactProfilePic() {
  // Let's assume my storage is only enabled for authenticated users 
  // This is set in your firebase console storage "rules" tab

  firebase.auth().onAuthStateChanged(function (user) {
    
      var fileInput = document.getElementById("mypic-input");   // pointer #1
      const image = document.getElementById("mypic-goes-here"); // pointer #2
      // listen for file selection
      fileInput.addEventListener('change', function (e) {
          var file = e.target.files[0];
          var blob = URL.createObjectURL(file);
          image.src = blob;            // display this image
         

          //store using this name
          var storageRef = storage.ref("images/" + user.uid + ".jpg"); 
          
          //upload the picked file
          storageRef.put(file) 
              .then(function(){
                  console.log('Uploaded to Cloud Storage.');
              })

          //get the URL of stored file
          storageRef.getDownloadURL()
              .then(function (url) {   // Get URL of the uploaded file
                  console.log(url);    // Save the URL into users collection
                  db.collection("users").doc(user.uid).update({

                      "profilePic": url
                  })
                  .then(function(){
                      console.log('Added Profile Pic URL to Firestore.');
                  })
              })
      })
  })
}
uploadContactProfilePic();


function displayContactProfilePic() {
 
  console.log("hi");
  firebase.auth().onAuthStateChanged(function (user) {      //get user object
    var uid = user.uid;

    db.collection("users").doc(uid).collection("contacts").doc() //use user's uid
                                                            
          .get()                                            //READ the doc
          .then(function (doc) {
              var picUrl = doc.data().profilePic;           //extract pic url

              // use this line if "mypicdiv" is a "div"
              //$("#mypicdiv").append("<img src='" + picUrl + "'>")
              
              // use this line if "mypic-goes-here" is an "img" 
              $("#mypic-goes-here").attr("src", picUrl);
          })
  })
}
displayContactProfilePic();