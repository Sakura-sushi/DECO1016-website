const zipcode = document.getElementById("zipcode");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signupbutton = document.getElementById("signupbutton");

signupbutton.onclick = function () {
    const key1 = "zipcode";
    const value1 = zipcode.value;

    const key2 = "email";
    const value2 = email.value;

    const key3 = "password";
    const value3 = password.value;

    console.log(key1);
    console.log(value1);
    console.log(key2);
    console.log(value2);
    console.log(key3);
    console.log(value3);

    if (key1 && value1 && key2 && value2 && key3 && value3) {
        localStorage.setItem(key1, value1);
        localStorage.setItem(key2, value2);
        localStorage.setItem(key3, value3);
        location.reload
    }
    // localStorage for all of user inputs

    window.location = "Membership.html";
    // Sends user to membership endpoint page

};