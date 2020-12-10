# Note Taker App

## Description
This application allows the user to write notes and save and delete them. It uses express routing to make calls to a backend server that uses the data when requested. Saving a new note will run a Post Request to the server to add new information, while the deletion of a note will run a Delete Request by routing to a route that's specific to the note's randomly generated ID (UniqId package). Every time the page loads, a Get Request is used to display the saved notes to the screen.  

## Test Instructions
Open the "server.js" file in the integrated terminal, then enter "node server.js" and hit Enter. The terminal will alert you that it's listening on the designated port (3001). At this point, you should navigate to localhost:3001 in the browser to run the application. Once there, click "Get Started" and enter a title and body text for your note. When finished, click the floppy disc icon on the top right to save the note. The saved notes will appear on the left side, and a trash can icon will be available alongside each note for deletion. After saving, the note page will refresh and you can enter a new note, or click the pencil icon in the right corner at any time to do so as well. To revisit the home page, click "Note Taker" on the top left.

## Images
### Front Page:
<img src="https://github.com/Gavin56/images/blob/main/note-taker-front.png?raw=true" alt="Note Taker Front Page" width=500px>

### Note Example:
<img src="https://github.com/Gavin56/images/blob/main/note-taker-test.png?raw=true" alt="Note Taker Note Page" width=500px>

### Empty Note Page:
<img src="https://github.com/Gavin56/images/blob/main/note-taker-empty.png?raw=true" alt="Note Taker Empty Note" width=500px>

## Deployed Application
 https://powerful-inlet-25334.herokuapp.com/
