# MMProjectChat
Objective #1: Build a chat box with basic functionalities

12-05-2017: Created index.html and chatRoom.js.
    
    In index.html - 
    a. created a header and two input fields
    for username and message box. A submit button is created
    to validate username
    /
    In chatRoom.js - validate username 
    

12-05-2017: Created a directory called javascript

    Under javascript/ is chatRoom.js
    /
    In index.html - 
    a. reoriented headers and input fields
    b. added borders and colors on to message board and input fields
    /
    In chatRoom.js - 
    a. created a function to welcome a user to a chatbox
    b. created a function to display real-time clock
    /
    TODO:
    /
    a. work on displaying real-time clock
    b. only display welcome message when a user is validated
    c. allow user to type in the message when the username is validated


12-07-2017: Modification

    a. Reveals chatbox once the username is validated [TEMP fix..used global var]
    /
    TODO:
    a. Current 'login' requires two [ENTER] to reveal a textbox..needs to fix this
    b. Current 'login' uses a global variable.. change this asap
    c. Work on displaying a real-time clock
   

12-08-2017: Node and MongoDB

    a. Modified index.html and css for chatbox design and color
    b. Nodejs and MongoDB installed on Raspberry Pi
    /
    Following commands were used:
    $ sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    $ sudo apt-get install nodejs
    /
    Under project directory, installed socket.io and mongodb
    $ sudo npm install socket.io
    $ sudo npm install mongodb
    /
    Faced several issues along the way, but the following links helped me install successfully :)
    1. https://stackoverflow.com/questions/24599119/mongodb-not-working-error-dbpath-data-db-does-not-exist
    2. https://stackoverflow.com/questions/6478113/unable-to-start-mongodb-local-server
    /
    c. Created server.js - have a db listener to record data that are being transmitted via socket
    /
    /
    TODO:
    a. Debug current issue with server.js
    b. Current 'login' requires two [ENTER] to reveal a textbox..needs to fix this
    c. Current 'login' uses a global variable.. change this asap
    d. Work on displaying a real-time clock
    