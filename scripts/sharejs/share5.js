function multipleSelect() {
    const multibutton = document.getElementById("multiple");

    function multipleSelect() {
        window.location.href = "/html/share/index2.html";
    }

    multibutton.addEventListener("click", multipleSelect);
}

 multipleSelect();
 
 function closeSelect() {
    const closebutton = document.getElementById("close");

    function closeSelect() {
        window.location.href = "/html/share/index0.html";
    }

    closebutton.addEventListener("click", closeSelect);
}

 closeSelect();

 function populateCardsDynamically() {
    let cardTemplate = document.getElementById("contactCardTemplate");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            console.log(uid);
    db.collection("users").get()
    .then(snap => {
        var i = 1;  //if you want to use commented out section
        snap.forEach(doc => { //iterate thru each doc
                var fistName = doc.data().firstName; //gets the name field
                var lastName = doc.data().lastName;
                var emailAddress = doc.data().emailAddress;
                var phoneNumber = doc.data().phoneNumber;
               
                let testContactCard = contactCardTemplate.content.cloneNode(true);
                
                testContactCard.querySelector('.card-title1').innerHTML = firstName;     //equiv getElementByClassName
                testContactCard.querySelector('.card-title2').innerHTML = lastName; 
                testContactCard.querySelector('.card-title3').innerHTML = emailAddress; 
                testContactCard.querySelector('.card-title4').innerHTML = phoneNumber;  //equiv getElementByClassName
        
                testContactCard.querySelector('img').src = `./images/${contactID}.jpg`;   //equiv getElementByTagName
                
             //attach to gallery
          document.getElementById(collection + "-go-here").appendChild( testContactCard);
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
populateCardsDynamically();


function addNewContact() {
    const addbutton = document.getElementById("new");

    function addNewContact() {
        window.location.href = "/html/share/index4.html";
    }

    addbutton.addEventListener("click", addNewContact);
}

 addNewContact();