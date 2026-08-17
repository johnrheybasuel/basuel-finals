/* ================= LOGIN SCRIPT ================= */
document.addEventListener("DOMContentLoaded", function () {

    var submitBtn = document.getElementById("submit");

    if (submitBtn) {
        submitBtn.addEventListener("click", function () {

            var email = document.getElementById("email").value();
            var password = document.getElementById("password").value();

            if (email === "" && password === "") {
                swal("Missing Information", "Username and Password are required", "warning");
            }
            else if (email === "") {
                swal("Missing Username", "Please enter your username", "warning");
            }
            else if (password === "") {
                swal("Missing Password", "Please enter your password", "warning");
            }
            else {
                swal("Login Successful 🎉", "Welcome to Basuel's Website!", "success");
            }
        });
    }

});
