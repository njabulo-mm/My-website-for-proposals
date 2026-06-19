const form = document.getElementById("enquiryForm");
const messageBox = document.getElementById("message-box");
 
// define the code that will run as soon as the use
// clicks on submit
form.addEventListener("submit", function(event){
    // theres a line i want to add after
    event.preventDefault(); //stops the page from reloading
 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
 
 
    //Us checking whether the user entered the right things or not
//Validation
 
 
    if (name === ""){
        messageBox.textContent = "Please enter your name.";
        return;
    }
 
    if (email === ""){
        messageBox.textContent = "Please enter your email.";
        return;
    }
 
    if (!email.includes("@") || !email.includes(".")){
        messageBox.textContent = "Please enter a valid email.";
        return;
    }
 
    if (message === ""){
        messageBox.textContent = "Please state your enquiry.";
        return;
    }
 
    const myEmail = "magagulanjabulo700@gmail.com";
 
    const subject = "New enquiry from " + name;
    const body = "Name: "+ name + "\nEmail: " + email + "\n\nMessage: " + message;
 
    window.location.href =
        "mailto: " + myEmail + "?subject=" + encodeURIComponent(subject) + "&body=" +
        encodeURIComponent(body);
 
    // if all is well
    messageBox.textContent = "Thank you " + name + " your enquiry has been sent"
    ;
 
})