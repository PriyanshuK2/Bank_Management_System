// document.getElementById("contactNumber").addEventListener("input", function (e) {
//     this.value = this.value.replace(/[^0-9]/g, '');
// });

// document.getElementById("customerName").addEventListener("input", function () {
//     this.value = this.value.replace(/[^a-zA-Z]/g, '');
// });

// document.getElementById("occupation").addEventListener("input", function () {
//     this.value = this.value.replace(/[^a-zA-Z]/g, '');
// });

// document.getElementById("employerName").addEventListener("input", function () {
//     this.value = this.value.replace(/[^0-9a-zA-Z]/g, '');
// });

// document.getElementById("ssnId").addEventListener("input", function () {
//     this.value = this.value.replace(/[^0-9a-zA-Z]/g, '');
// });

// function validateForm() {
//     const ssnId = document.getElementById("ssnId").value.trim();
//     const name = document.getElementById("customerName").value.trim();
//     const occupation = document.getElementById("occupation").value.trim();
//     const employerName = document.getElementById("employerName").value.trim();
//     const employerAddress = document.getElementById("employerAddress").value.trim();
//     const email = document.getElementById("customerEmail").value.trim();
//     const address = document.getElementById("customerAddress").value.trim();
//     const maritalStatus = document.getElementById("maritalStatus").value;
//     const contactNumber = document.getElementById("contactNumber").value.trim();
//     const loanAmount = document.getElementById("loanAmount").value.trim();
//     const loanDuration = document.getElementById("loanDuration").value.trim();
//     const message = document.getElementById("message");

   
//     if (!/^[a-zA-Z0-9]+$/.test(ssnId) || ssnId.length > 10) {
//         message.textContent = "SSN ID must be alphanumeric and up to 10 characters.";
//         message.style.color = "red";
//         return false;
//     }

   
//     if (!/^[a-zA-Z\s]+$/.test(name)) {
//         message.textContent = "Please enter a valid name (alphabets only).";
//         message.style.color = "red";
//         return false;
//     }

//     if (!/^\d{10}$/.test(contactNumber) || /^(\d)\1{9}$/.test(contactNumber)) {
//         message.textContent = "Contact number must be a valid 10-digit number.";
//         message.style.color = "red";
//         return false;
//     }

 
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         message.textContent = "Please enter a valid email address.";
//         message.style.color = "red";
//         return false;
//     }

//     if (loanAmount <= 0 || loanDuration <= 0) {
//         message.textContent = "Loan amount and duration must be positive numbers.";
//         message.style.color = "red";
//         return false;
//     }

 

//     message.textContent = "Registration successful!";
//     message.style.color = "green";


//     const loanData = {
//         ssnId,
//         name,
//         email,
//         contactNumber,
//         loanAmount
//     };
//     localStorage.setItem(ssnId, JSON.stringify(loanData));


//     setTimeout(() => {
//         window.location.href = `loanAck.html?ssnId=${ssnId}&name=${name}&email=${email}&contactNumber=${contactNumber}&loanAmount=${loanAmount}`;
//     }, 2000);
//     return false;
// }

// function saveToLocalStorage(customerData) {
//     localStorage.setItem("customerLoanData", JSON.stringify(customerData));
// }



document.addEventListener("DOMContentLoaded", function () {
    // Generate a unique loan ID when the page loads
    const loanId = `L${generateRandomNumber(8)}`;
    document.getElementById("loanId").value = loanId; // Set the loanId in the form
});

// Function to generate random number for unique Loan ID
function generateRandomNumber(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)).toString();
}
document.getElementById("contactNumber").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("customerName").addEventListener("input", function () {
    this.value = this.value.replace(/[^\sa-zA-Z]/g, '');
});


function validateForm() {
    const loanId = document.getElementById("loanId").value;
    const ssnId = document.getElementById("ssnId").value;
    const customerName = document.getElementById("customerName").value.trim();
    const occupation = document.getElementById("occupation").value.trim();
    const employerName = document.getElementById("employerName").value.trim();
    const employerAddress = document.getElementById("employerAddress").value.trim();
    const customerEmail = document.getElementById("customerEmail").value.trim();
    const customerAddress = document.getElementById("customerAddress").value.trim();
    const maritalStatus = document.getElementById("maritalStatus").value;
    const contactNumber = document.getElementById("contactNumber").value.trim();
    const loanAmount = document.getElementById("loanAmount").value.trim();
    const loanDuration = document.getElementById("loanDuration").value.trim();
    const message = document.getElementById("message");

    // Validate Contact Number
    if (!/^\d{10}$/.test(contactNumber)) {
        message.textContent = "Contact number must be a valid 10-digit number.";
        message.style.color = "red";
        return false;
    }

    // Create an object to store all loan data
    const loanData = {
        loanId,
        ssnId,
        customerName,
        occupation,
        employerName,
        employerAddress,
        customerEmail,
        customerAddress,
        maritalStatus,
        contactNumber,
        loanAmount,
        loanDuration
    };

    // Save the loan data in localStorage
    localStorage.setItem(loanId, JSON.stringify(loanData));

    // Display success message
    message.textContent = "Loan Registration Successful!";
    message.style.color = "green";

    // Optionally redirect or do something else after successful form submission
    setTimeout(() => {
        window.location.href = `loanAck.html?loanId=${loanId}`;
    }, 2000);

    return false;
}