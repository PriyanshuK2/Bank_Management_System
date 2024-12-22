function getCustomerReg() {
    let cName = document.getElementById("customerName").value;
    let accNo = document.getElementById("accountNumber").value;
    let ifsc = document.getElementById("ifscCode").value;
    let custEmail = document.getElementById("customerEmail").value;
    let cNo = document.getElementById("contactNumber").value;
    let ssnId = document.getElementById("ssnId").value;
    let accBal = document.getElementById("accountBalance").value;
    let aadhaar = document.getElementById("aadhaarCard").value;
    let panCard = document.getElementById("panCard").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let maritalStatus = document.getElementById("maritalStatus").value;
    let cAdd = document.getElementById("customerAddress").value;
    let message = document.getElementById("message1");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(custEmail)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return false;
    }

    if (!/^\d{10}$/.test(cNo) || /^(\d)\1{9}$/.test(cNo)) {
        message.textContent = "Contact number must be a valid 10-digit number.";
        message.style.color = "red";
        return false;
    }

    message.textContent = "Registration successful!";
    message.style.color = "green";

    let customerData = { ssnId, cName, accNo, ifsc, custEmail, cNo, accBal, aadhaar, panCard, dob, gender, maritalStatus, cAdd };
    localStorage.setItem(ssnId, JSON.stringify(customerData));

    setTimeout(() => {
        window.location.href = `ack.html?ssnId=${ssnId}&cName=${cName}&accNo=${accNo}&ifsc=${ifsc}&custEmail=${custEmail}&cNo=${cNo}`;
    }, 2000);

    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ssnId").value = generateCustomerSSN();
    document.getElementById("accountNumber").value = generateAccountNumber();
    document.getElementById("ifscCode").value = generateIFSCCode();
});

function generateCustomerSSN() {
    return `C${Math.floor(1000000 + Math.random() * 9000000)}`;
}

function generateAccountNumber() {
    return Math.floor(10000000000 + Math.random() * 90000000000);
}

function generateIFSCCode() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetters = letters.charAt(Math.floor(Math.random() * letters.length)) +
                          letters.charAt(Math.floor(Math.random() * letters.length)) +
                          letters.charAt(Math.floor(Math.random() * letters.length));
    const randomNumbers = Math.floor(100 + Math.random() * 900);
    return randomLetters + randomNumbers;
}


document.getElementById("aadhaarCard").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("contactNumber").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("customerName").addEventListener("input", function () {
    this.value = this.value.replace(/[^\sa-zA-Z]/g, '');
});

document.getElementById("panCard").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9a-zA-Z]/g, '');
});
