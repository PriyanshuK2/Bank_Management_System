document.addEventListener("DOMContentLoaded", function () {
    const transactionIdField = document.getElementById("searchTransactionId");
    transactionIdField.value = ""; // Clear the input field on page load
});

// Search function to check if the transaction exists in localStorage
function searchTransaction() {
    const transactionId = document.getElementById("searchTransactionId").value.trim();

    if (!transactionId) {
        document.getElementById('searchMessage').textContent = "Please enter a Transaction ID.";
        return false;
    }

    const transactionData = JSON.parse(localStorage.getItem(transactionId));

    if (transactionData) {
        // Store the transaction data in localStorage for the next page (show transaction page)
        localStorage.setItem('currentTransaction', JSON.stringify(transactionData));

        // Redirect to the show transaction page
        window.location.href = `showTransaction.html?transactionId=${transactionId}`;
    } else {
        document.getElementById('searchMessage').textContent = "Transaction ID not found in local storage.";
    }

    return false; // Prevent form submission
}