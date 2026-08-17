/* ================= ARRAY STORAGE ================= */
var users = [];   /* ARRAY - used as QUEUE (FIFO structure) */

document.addEventListener("DOMContentLoaded", function () {

    var registerBtn = document.getElementById("registerBtn");

    if (registerBtn) {
        registerBtn.addEventListener("click", function () {

            var firstInput = document.getElementById("firstname");
            var middleInput = document.getElementById("middle");
            var lastInput = document.getElementById("lastname");
            var ageInput = document.getElementById("age");
            var gmailInput = document.getElementById("gmail");

            var first = firstInput.value();
            var middle = middleInput.value.trim();
            var last = lastInput.value.trim();
            var age = ageInput.value.trim();
            var gmail = gmailInput.value.trim();

            /* REMOVE ERROR STYLE */
            firstInput.classList.remove("input-error");
            lastInput.classList.remove("input-error");
            ageInput.classList.remove("input-error");
            gmailInput.classList.remove("input-error");

            var hasError = false;

            if (first === "") { firstInput.classList.add("input-error"); hasError = true; }
            if (last === "") { lastInput.classList.add("input-error"); hasError = true; }
            if (age === "") { ageInput.classList.add("input-error"); hasError = true; }
            if (gmail === "") { gmailInput.classList.add("input-error"); hasError = true; }

            if (hasError) {
                swal("Missing Information", "Fill all required fields", "warning");
                return;
            }

            if (middle === "") middle = "N/A";

            /* CREATE USER OBJECT */
            var user = {
                first: first,
                middle: middle,
                last: last,
                age: age,
                gmail: gmail
            };

            /* ================= QUEUE ENQUEUE ================= */
            users.push(user);  
            /* CLEAR INPUTS */
            
            middleInput.value = "";
            lastInput.value = "";
            ageInput.value = "";
            gmailInput.value = "";
            firstInput.focus();

            displayUsers();

            swal("Registered ✅", "Thank you for register", "success");
        });
    }
});


/* ================= DISPLAY QUEUE ================= */
function displayUsers() {

    var outputBox = document.getElementById("output-box");
    if (!outputBox) return;   

    outputBox.innerHTML = "<h2>Registered Info</h2>";

    if (users.length === 0) {
        outputBox.innerHTML += "<p>No users in queue</p>";
        return;
    }

    for (var i = 0; i < users.length; i++) {

        outputBox.innerHTML +=
            "<div style='margin-bottom:10px; border-bottom:1px solid #ccc; padding-bottom:5px;'>" +
            "<p>First Name: " + users[i].first + "</p>" +
            "<p>Middle Name: " + users[i].middle + "</p>" +
            "<p>Last Name: " + users[i].last + "</p>" +
            "<p>Age: " + users[i].age + "</p>" +
            "<p>Gmail: " + users[i].gmail + "</p>" +
            "</div>";
    }
}

/* ================= QUEUE DEQUEUE ================= */
function dequeueUser() {


    if (users.length === 0) {
        swal("Queue Empty", "No users to remove", "warning");
        return;
    }

    var removedUser = users.shift();

    displayUsers();

    swal(
        "Dequeued",
        removedUser.first + " " + removedUser.last + " removed from queue",
        "info"
    );
}
