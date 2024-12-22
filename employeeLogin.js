function login() {
    const loginEmpId = document.getElementById("loginEmpId").value;
    const loginPassword = document.getElementById("loginPassword").value;
    const loginMessage = document.getElementById("loginMessage");

    const employeeData = JSON.parse(localStorage.getItem(loginEmpId));

    if (employeeData && employeeData.emppwd === loginPassword) {
        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "green";

       
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } else {
        loginMessage.textContent = "Invalid Employee ID or password.";
        loginMessage.style.color = "red";
    }

    return false;
}