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
    // Set boolean
    var status = false;

    // Check if user successfully follows the nickname rules
    while(status === false) {
        // By checking if the length of the name exceeds desired length
        if(myName.length > 21) {
            myMsg.innerHTML = "Shorten your name. Please try again.";
        // Or if it contains more than alphabets
        } else if(/^[a-zA-Z]+$/.test(myName) === false) {
            myMsg.innerHTML = "Your name cannot contain special characters. Please try again.";
        } else {
            status = true;
            myMsg.innerHTML = "Login successful! Welcome " + myName + "!";
        }
    }

    return myMsg;
}