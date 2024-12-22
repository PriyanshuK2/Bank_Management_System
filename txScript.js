
document.addEventListener("DOMContentLoaded", function () {
    const transactionIdField = document.getElementById("transactionId");
    transactionIdField.value = `T${generateRandomNumber(6)}`;
});

// Input validation to only allow numbers for contact and Aadhaar number
document.getElementById("contactNumber").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("customerName").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z ]/g, '');
});

document.getElementById("panCardNo").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9a-zA-Z]/g, '');
});

document.getElementById("accountId").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9a-zA-Z]/g, '');
});

document.getElementById("aadhaarNo").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Generate a random number of specified length
function generateRandomNumber(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)).toString();
}

// Form validation and localStorage data storage
function validateForm() {
    const transactionId = document.getElementById("transactionId").value;
    const customerSsnId = document.getElementById("customerSsnId").value.trim();
    const customerName = document.getElementById("customerName").value.trim();
    const contactNumber = document.getElementById("contactNumber").value.trim();
    const aadhaarNo = document.getElementById("aadhaarNo").value.trim();
    const panCardNo = document.getElementById("panCardNo").value.trim();
    const transactionAmount = parseFloat(document.getElementById("transactionAmount").value.trim());
    const transactionDate = document.getElementById("transactionDate").value;
    const message = document.getElementById("message");
    const accountId = document.getElementById("accountId").value;
    const address = document.getElementById("address").value;
    const transactionMode = document.getElementById("transactionMode").value;

    // Validation checks
    if (!/^\d{10}$/.test(contactNumber) || /^(\d)\1{9}$/.test(contactNumber)) {
        message.textContent = "Contact number must be a valid 10-digit number.";
        message.style.color = "red";
        return false;
    }

    if (!/^\d{12}$/.test(aadhaarNo)) {
        message.textContent = "Aadhaar number must be a 12-digit number.";
        message.style.color = "red";
        return false;
    }

    if (!/^[A-Za-z0-9]{10}$/.test(panCardNo)) {
        message.textContent = "PAN number must be a 10-character alphanumeric value.";
        message.style.color = "red";
        return false;
    }

    if (transactionAmount <= 0) {
        message.textContent = "Transaction amount must be a positive number.";
        message.style.color = "red";
        return false;
    }

    // Success message
    message.textContent = "Transaction submitted successfully!";
    message.style.color = "green";

    // Prepare transaction data for storage
    const txData = {
        transactionId,
        customerSsnId,
        customerName,
        contactNumber,
        aadhaarNo,
        accountId,
        address,
        transactionMode,
        panCardNo,
        transactionAmount,
        transactionDate
    };

    // Store the transaction data in localStorage
    localStorage.setItem(transactionId, JSON.stringify(txData));

    // Redirect to the acknowledgment page with the transactionId as a query parameter
    setTimeout(() => {
        window.location.href = `txAck.html?transactionId=${transactionId}`;
    }, 2000);  // Delay for 2 seconds before redirect

    return false; // Prevent the form from actually submitting
}
