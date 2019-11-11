function funct() {
    if (document.getElementById("female").checked) {
        var val = document.getElementById("female").value;
        alert(val);
    }

    else if (document.getElementById("male").checked) {
        var val = document.getElementById("male").value;
        alert(val);
    }
};
// localStorage for first user input

function funct2() {
    if (document.getElementById("seek-female").checked) {
        var val = document.getElementById("seek-female").value;
        alert(val);
    }

    else if (document.getElementById("seek-male").checked) {
        var val = document.getElementById("seek-male").value;
        alert(val);
    }
};
// localStorage for second user input

const firstname = document.getElementById("firstname");
const signupbutton = document.getElementById("signupbutton");

signupbutton.onclick = function () {
    const key = "firstname";
    const value = firstname.value;

    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload
    }
    // localStorage for third user input

    window.location = "Signup2.html";
    // Sends user to next sign up page
};
