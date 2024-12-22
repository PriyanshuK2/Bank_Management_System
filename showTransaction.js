document.addEventListener("DOMContentLoaded", function () {
    // Get the transactionId from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const transactionId = urlParams.get('transactionId');

    if (!transactionId) {
        document.getElementById('transactionDetails').innerHTML = "<p>No transaction found. Please try again.</p>";
        return;
    }

    // Retrieve the transaction data from localStorage
    const transactionData = JSON.parse(localStorage.getItem(transactionId));

    if (transactionData) {
        // Display the transaction details in the HTML
        const transactionDetailsDiv = document.getElementById('transactionDetails');
        transactionDetailsDiv.innerHTML = `
            <p><strong>Transaction ID:</strong> ${transactionData.transactionId}</p>
            <p><strong>Customer SSN ID:</strong> ${transactionData.customerSsnId}</p>
            <p><strong>Customer Name:</strong> ${transactionData.customerName}</p>
            <p><strong>Account ID:</strong> ${transactionData.accountId}</p>
            <p><strong>Aadhaar No:</strong> ${transactionData.aadhaarNo}</p>
            <p><strong>PAN Card No:</strong> ${transactionData.panCardNo}</p>
            <p><strong>Address:</strong> ${transactionData.address}</p>
            <p><strong>Transaction Date:</strong> ${transactionData.transactionDate}</p>
            <p><strong>Contact Number:</strong> ${transactionData.contactNumber}</p>
            <p><strong>Transaction Mode:</strong> ${transactionData.transactionMode}</p>
            <p><strong>Transaction Amount:</strong> ₹${transactionData.transactionAmount.toFixed(2)}</p>
        `;
    } else {
        // If no data is found, display a message
        document.getElementById('transactionDetails').innerHTML = "<p>No transaction found for this ID. Please try again.</p>";
    }
});