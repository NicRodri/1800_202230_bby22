function multipleSelect() {
  const multibutton = document.getElementById("multiple");

  function multipleSelect() {
    window.location.href = "/html/share/index2.html";
  }

  multibutton.addEventListener("click", multipleSelect);
}

multipleSelect();

// function closeSelect() {
//   const closebutton = document.getElementById("close");

//   function closeSelect() {
//     window.history.back();
//   }

//   closebutton.addEventListener("click", closeSelect);
// }

// closeSelect();

function populateCardsDynamically(collection) {
  let cardTemplate = document.getElementById("contactCardTemplate");
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      console.log(uid);
      db.collection("users").doc(uid).collection(collection).get()
        .then(snap => {
          var i = 1;  //if you want to use commented out section
          snap.forEach(doc => { //iterate thru each doc
            var firstName = doc.data().firstName; //gets the name field
            var lastName = doc.data().lastName;
            var emailAddress = doc.data().emailAddress;
            var phoneNumber = doc.data().phoneNumber;
            // let picUrl = userDoc.data().profilePic; 
            let testContactCard = contactCardTemplate.content.cloneNode(true);
            contactID = doc.id;
            testContactCard.querySelector('.card-title1').innerHTML = firstName;     //equiv getElementByClassName
            testContactCard.querySelector('.card-title2').innerHTML = lastName;
            testContactCard.querySelector('.card-title3').innerHTML = emailAddress;
            testContactCard.querySelector('.card-title4').innerHTML = phoneNumber;  //equiv getElementByClassName
            // $("#mypic-goes-here").attr("src", picUrl);
            testContactCard.querySelector('.card-title0').innerHTML = `./images/${contactID}.jpg`;   //equiv getElementByTagName

            //attach to gallery
            document.getElementById(collection + "-go-here").appendChild(testContactCard);
            i++;   //if you want to use commented out section
          })
        })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
populateCardsDynamically("contacts");


function addNewContact() {
  const addbutton = document.getElementById("new");

  function addNewContact() {
    window.location.href = "/html/share/index4.html";
  }

  addbutton.addEventListener("click", addNewContact);
}

addNewContact();