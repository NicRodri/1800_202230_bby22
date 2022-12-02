## My Web Application (BaLaNce)

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This browser based web application will allow for users to create tasks and activities and organize them
based on urgency factor and due dates. Some additional features include the ability to customize you personal profile
and share contacts to friends(This feature does not share tasks/activities yet but does create contacts).
	
## Technologies
Technologies used for this project:
* HTML, CSS, git
* JavaScript
* Bootstrap 
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url
├── index.html   
└── README.md

It has the following subfolders and files:
├── css                      # Folder for css files
    ├── sharecss             # Folder for css files for share feature
        /index1.css
	    /index2.css
    /style.css
├── .git                     # Folder for git repo
├── html                     # Folder for html files
    ├── notifications        # Html for notification
    	/contact.html
	    /favourites.html
	    /history.html
	    /personal.html
	    /settings0.html
	    /settings1.html
	    /settings2.html
    ├── reusable-content    # Html for reusable-content
    	/add.html
	    /footer.html
	    /nav.html
    ├── share               # Html for the share feature
    	/index1.html
	    /index2.html
	    /index4.html
	    /index5.html
	    /index6.html
    ├── sleep-time          # Html for the sleep feature
    	/sleep.html
    ├── tasks-and-activities  # Html for the tasks and activities
    	/activity.html
	    /activityDetails.html
	    /task.html
	    /taskDetails.html
        /login.html
        /main.html
├── images                   # Folder for images
    ├── landing-page         # Images for the landing page
    	/balance.svg
	    /main-page.png
	    /share.png
	    /notifications.png
        /portrait.svg	
        /default.jpg              
├── scripts                  # Folder for scripts
    ├── event-listeners      # Folder for eventlisteners and notification javascript
    	/add.js
	    /favourites.js
	    /history.js
	    /navigationFooter.js
	    /navigationHeader.js
	    /personal.js
	    /settings0.js
	    /settings1.js
	    /settings2.js
    ├── scheduler  	    # Folder for scheduler javascript
    	/activities.js
	    /activityDetails.js
	    /sleep.js
	    /taskDetails.js
	    /tasks.js
    ├── sharejs             # Folder for share function javascript
    	/share1.js
	    /share2.js
	    /share4.js
	    /share5.js
	    /share6.js
        /authentication.js
        /firebaseAPI_TEAM22.js
        /main.js
        /skeleton.js


Firebase hosting files: 
├── firebase.json
├── 404.html
├── firestore.indexes.json
├── firestore.rules
└── storage.rules

```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation

