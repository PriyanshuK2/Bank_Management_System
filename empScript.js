
function getReg() {
    const Efname = document.getElementById("empFirstName").value;
    const Elname = document.getElementById("empLastName").value;
    const empEmail = document.getElementById("empEmail").value;
    const emppwd = document.getElementById("empPassword").value;
    const empConPwd = document.getElementById("confirmPassword").value;
    const empAdd = document.getElementById("empAddress").value;
    const empCno = document.getElementById("empContactNumber").value;
    const empId = document.getElementById("employeeId").value;
    const message = document.getElementById("message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(empEmail)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(emppwd)) {
        message.textContent = "Password must be at least 8 characters, include letters and numbers.";
        message.style.color = "red";
        return false;
    }

    if (emppwd !== empConPwd) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return false;
    }

    if (!/^\d{10}$/.test(empCno) || /^(\d)\1{9}$/.test(empCno)) {
        message.textContent = "Contact number must be a valid 10-digit number.";
        message.style.color = "red";
        return false;
    }

    message.textContent = "Registration successful!";
    message.style.color = "green";

    
    const employeeData = {
        empId,
        Efname,
        Elname,
        empEmail,
        emppwd,
        empCno
    };
    localStorage.setItem(empId, JSON.stringify(employeeData));
    localStorage.setItem('empId',empId);
    localStorage.setItem('Efname',Efname);
    localStorage.setItem('Elname',Elname);
    localStorage.setItem('empEmail',empEmail);
    localStorage.setItem('emppwd',emppwd);
    localStorage.setItem('empConPwd',empConPwd);
    localStorage.setItem('empAdd',empAdd);
    localStorage.setItem('empCno',empCno);

  
    setTimeout(() => {
        window.location.href = `acknowlegemnt.html?empId=${empId}&Efname=${Efname}&Elname=${Elname}&empEmail=${empEmail}&empCno=${empCno}`;
    }, 2000);

    return false;
}

function generateRand() {
    return `EMP${Math.floor(1000000 + Math.random() * 9000000)}`; 
}

document.addEventListener("DOMContentLoaded", function() {
    const employeeId = document.getElementById("employeeId");
    employeeId.value = generateRand();
});

document.getElementById("empContactNumber").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("empFirstName").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
});

document.getElementById("empLastName").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
});