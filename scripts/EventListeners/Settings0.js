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
        // window.location.href = "/html/notifications/favorites.html";
    }

    favorites.addEventListener("click", getFavorites);
}

favoriteSelect();

function logoutSelect() {
    const rcorners1 = document.getElementById("rcorners1");

    function getLogout() {
        window.location.href = "/html/login.html";
    }

    rcorners1.addEventListener("click", getLogout);
}

logoutSelect();

function historySelect() {
    const history = document.getElementById("history");

    function getHistory() {
        // window.location.href = "/html/notifications/history.html";
    }

    history.addEventListener("click", getHistory);
}

historySelect();




function chooseFileListener(){
  const fileInput = document.getElementById("mypic-input");   // pointer #1
  const image = document.getElementById("mypic-goes-here");   // pointer #2

  //attach listener to input file
  //when this file changes, do something
  fileInput.addEventListener('change', function(e){

      //the change event returns a file "e.target.files[0]"
      ImageFile = e.target.files[0];
      var blob = URL.createObjectURL(ImageFile);

      //change the DOM img element source to point to this file
      image.src = blob;    //assign the "src" property of the "img" tag
  })
}
chooseFileListener();

function saveUserInfo() {
  firebase.auth().onAuthStateChanged(function (user) {
      var storageRef = storage.ref("images/" + user.uid + ".jpg");

      //Asynch call to put File Object (global variable ImageFile) onto Cloud
      storageRef.put(ImageFile)
          .then(function () {
              console.log('Uploaded to Cloud Storage.');

              //Asynch call to get URL from Cloud
              storageRef.getDownloadURL()
                  .then(function (url) { // Get "url" of the uploaded file
                      console.log("Got the download URL.");
                      //get values from the from


                      //Asynch call to save the form fields into Firestore.
                      db.collection("users").doc(user.uid).update({

                              profilePic: url // Save the URL into users collection
                          })
                          .then(function () {
                              console.log('Added Profile Pic URL to Firestore.');
                              console.log('Saved use profile info');
                              document.getElementById('personalInfoFields').disabled = true;
                          })
                  })
          })
  })
}

function populateInfo() {
  firebase.auth().onAuthStateChanged(user => {
          if (user) {
              // go and get the curret user info from firestore
              currentUser = db.collection("users").doc(user.uid);

              currentUser.get()
                  .then(userDoc => {
                      let picUrl = userDoc.data().profilePic; 

                      if (picUrl != null){
                          console.log(picUrl);
                          // use this line if "mypicdiv" is a "div"
                          //$("#mypicdiv").append("<img src='" + picUrl + "'>")
                          $("#mypic-goes-here").attr("src", picUrl);
                      }
                      else
                      console.log("picURL is null");
                  })

          } else {
              console.log("no user is logged in")
          }
      }

  )

}
populateInfo();

//------------------------------------------------
// Call this function when the "logout" button is clicked
//-------------------------------------------------
function logout() {
    console.log("logging out user");
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "login.html";
      }).catch((error) => {
        // An error happened.
      });
}