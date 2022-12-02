function multipleSelect() {
  const multibutton = document.getElementById("multiple");

  function multipleSelect() {
    window.location.href = "/html/share/index6.html";
  }

  multibutton.addEventListener("click", multipleSelect);
}

multipleSelect();


//populate the contact info
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
            console.log("This is" + firstName);
            var lastName = doc.data().lastName;
            var emailAddress = doc.data().emailAddress;
            var phoneNumber = doc.data().phoneNumber;
            var picUrl = doc.data().profilePic;
            console.log("This is" + picUrl);
            
            let testContactCard = contactCardTemplate.content.cloneNode(true);
            contactID = doc.id;

            // Used to change the modal text to a specific contact name
            testContactCard.querySelector(".card").setAttribute("data-whatever", firstName);
            $('#exampleModal').on('show.bs.modal', function (event) {
              var button = $(event.relatedTarget) // Button that triggered the modal
              var recipient = button.data('whatever');// Extract info from data-* attributes
              // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
              // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
              var modal = $(this)
              modal.find('.modal-title').text('Send to ' + recipient)
              modal.find('.modal-body input').val(recipient)
            })


            testContactCard.querySelector('.card-title1').innerHTML = firstName + " "  + lastName;     //equiv getElementByClassName
            testContactCard.querySelector('.card-title3').innerHTML = emailAddress;
            testContactCard.querySelector('.card-title4').innerHTML = phoneNumber;  //equiv getElementByClassName
            testContactCard.querySelector('.card-title0').appendChild (document.createElement('img')).src = picUrl;
            

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

//make the button clickable and direct to the new page
function addNewContact() {
  const addbutton = document.getElementById("new");

  function addNewContact() {
    window.location.href = "/html/share/index4.html";
  }

  addbutton.addEventListener("click", addNewContact);
}

addNewContact();
