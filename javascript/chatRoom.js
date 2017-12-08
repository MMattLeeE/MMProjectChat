/*
 * Authors: Matt Lee and Min Seo
 * Project: Chatroom Application
 *
 */

/*
 * Once a user submits his or her nickname, checkUser function ensures that the username does not
 * contain any special characters or numbers. The length of the username cannot exceed 21 characters. If a user
 * fails to meet these requirements, an alert will be shown, warning the user to change the username
 */
function checkUser() {
    // Obtain name from id, nickname
    var myName = document.getElementById("nickname").value;
    var myMsg = document.getElementById("nameCheck");

    window.userStatus = false;

    // Check if user successfully follows the nickname rules
    // By checking if the length of the name exceeds desired length
    if(myName.length > 21) {
        myMsg.innerHTML = "Shorten your name. Please try again.";
        // Or if it contains more than alphabets
    } else if(/^[a-zA-Z]+$/.test(myName) === false) {
        myMsg.innerHTML = "Your name must only contain alphabets. Please try again.";
    } else {
        window.userStatus = true;
        myMsg.innerHTML = "Login successful. Welcome " + myName + "! " + "Press [ENTER] to continue.";
    }

    return myMsg;
}


/*
 * This portion uses jQuery to have the textbox and chatbox disabled until the user
 * successfully logs into the application.
 */
$(document).ready(function() {
   $('#login').on('click', 'button', function() {
      if(window.userStatus === true) {
          $('.msgContainer').slideDown();
      }
   });
});





function displayTime() {
    // Create a Date object
    var currTime = new Date();

    var currHr = currTime.getHours();
    var currMin = currTime.getMinutes();
    var currSec = currTime.getSeconds();

    if(currHr < 12) {
        var timeOfDay = "AM";
    } else {
        timeOfDay = "PM";
    }

    var completeTime = currHr + ":" + currMin + ":" + currSec + " " + timeOfDay;

    document.getElementsByClassName(".msgContainer").find("").innerHTML = completeTime;
}