function notificationSelect() {
    const settings = document.getElementById("settings");

    function getSettings() {
        window.location.href = "/html/notifications/Settings1.html";
    }

    settings.addEventListener("click", getSettings);
}

notificationSelect();


function favoriteSelect() {
    const favorites = document.getElementById("favorites");

    function getFavorites() {
        window.location.href = "/html/notifications/favorites.html";
    }

    favorites.addEventListener("click", getFavorites);
}

favoriteSelect();


function showUploadedPicture() {
    const fileInput = document.getElementById("mypic-input"); // pointer #1
    const image = document.getElementById("mypic-goes-here"); // pointer #2
  
    //attach listener to input file
    //when this file changes, do something
    fileInput.addEventListener("change", function (e) {
      //the change event returns a file "e.target.files[0]"
      var blob = URL.createObjectURL(e.target.files[0]);
  
      //change the DOM img element source to point to this file
      image.src = blob; //assign the "src" property of the "img" tag
    });
  }
  showUploadedPicture();
  
  function saveNewContact() {
    firebase.auth().onAuthStateChanged(function (user) {
      //creates a new contact document with autoGen ID
      db.collection("users")
        .doc(user.uid)
        .collection("contacts")
        .add({
          firstName: firstName.value,
          lastName: lastName.value,
          emailAddress: emailAddress.value,
          phoneNumber: phoneNumber.value,
        })
        .then((doc) => {
          console.log("Added new contact profile info to Firestore.");
          contactID = doc.id;
          saveContactPicture(contactID);
        });
    });
  }
  
  function saveContactPicture(cid) {
    firebase.auth().onAuthStateChanged(function (user) {
      var uid = user.uid;
      console.log(uid);
      var storageRef = storage.ref("images/" + cid + ".jpg");
  
      //Asynch call to put File Object (global variable ImageFile) onto Cloud
      storageRef.put(ImageFile).then(function () {
        console.log("Uploaded to Cloud Storage.");
  
        //Asynch call to get URL from Cloud
        storageRef.getDownloadURL().then(function (url) {
          // Get "url" of the uploaded file
          console.log("Got the download URL.");
          //Asynch call to save the form fields into Firestore.
          db.collection("users")
            .doc(uid)
            .collection("contacts")
            .doc(cid)
            .update({
              profilePic: url, // Save the URL into users collection
            })
            .then(function () {
              console.log("Updated profile picture to Firestore.");
              document.getElementById("personalInfoFields").disabled = true;
            });
        });
      });
    });
  }
  
  function displayContactProfilePic() {
    console.log("hi");
    firebase.auth().onAuthStateChanged(function (user) {
      //get user object
      var uid = user.uid;
      db.collection("users")
        .doc(uid)
        .collection("contacts")
        .doc()
        //use user's uid
  
        .set() //READ the doc
        .then(function (doc) {
          var picUrl = doc.data().profilePic; //extract pic url
  
          // use this line if "mypicdiv" is a "div"
          //$("#mypicdiv").append("<img src='" + picUrl + "'>")
  
          // use this line if "mypic-goes-here" is an "img"
          $("#mypic-goes-here").attr("src", picUrl);
        });
    });
  }
