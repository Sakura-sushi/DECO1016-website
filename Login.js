const email = document.getElementById("email");
const password = document.getElementById("password");
const loginbutton = document.getElementById("loginbutton");

loginbutton.onclick = function () {
    const key1 = "email";
    const value1 = email.value;

    const key2 = "password";
    const value2 = password.value;

    console.log(key1);
    console.log(value1);
    console.log(key2);
    console.log(value2);

    if (key1 && value1 && key2 && value2) {
        localStorage.setItem(key1, value1);
        localStorage.setItem(key2, value2);
        location.reload
    }
    // localStorage for all of user inputs

    window.location = "Membership.html";
    // Sends user to membership endpoint page
};