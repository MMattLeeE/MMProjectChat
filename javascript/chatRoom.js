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

    // Check if user successfully follows the nickname rules
    // By checking if the length of the name exceeds desired length
    if(myName.length > 21) {
        myMsg.innerHTML = "Shorten your name. Please try again.";
        // Or if it contains more than alphabets
    } else if(/^[a-zA-Z]+$/.test(myName) === false) {
        myMsg.innerHTML = "Your name cannot contain special characters. Please try again.";
    } else {
        myMsg.innerHTML = "Login successful! Welcome " + myName + "!";
    }

    return myMsg;
}

function wecolmeMsg(person) {

}

function displayTime() {
    // Create a Date object
    var currTime = new Date();

    var currHr = currentTime.getHours();
    var currMin = currentTime.getMinutes();
    var currSec = currentTime.getSeconds();

    if(currHr < 12) {
        var timeOfDay = "AM";
    } else {
        timeOfDay = "PM";
    }

    var completeTime = currHr + ":" + currMin + ":" + currSec + " " + timeOfDay;

    document.getElementById("time").innerHTML = completeTime;
}