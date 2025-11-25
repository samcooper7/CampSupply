function displayPopUp(){
    let text = "Subscribe to our newsletter for exclusive discounts and offers!";
    let email = prompt(text, "Enter your email here");
    if (!email.includes("@")) {
        alert("You did not enter a valid email. Subscription cancelled.");
    } else if (email == "") {
        alert("You did not enter an email. Subscription cancelled.");
    } else {
        alert("Thank you for subscribing to our newsletter!");
    }
}