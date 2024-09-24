/* function handleDonation(h2Id, inputId, totalId) {
  const currentAmountText = document.getElementById(h2Id).innerText;
  let currentAmount = parseFloat(currentAmountText.replace(" BDT", ""));

  const donationInput = document.getElementById(inputId).value;
  const donationAmount = parseFloat(donationInput);

  if (donationAmount > 0) {
    currentAmount += donationAmount;
    document.getElementById(h2Id).innerText = `${currentAmount} BDT`;

    const totalAmountText = document.getElementById(totalId).innerText;
    let totalAmount = parseFloat(totalAmountText.replace(" BDT", ""));
    totalAmount -= donationAmount;
    document.getElementById(totalId).innerText = `${totalAmount} BDT`;

    document.getElementById(inputId).value = "";

    const transactionList = document.getElementById("transaction-list");
    const newTransaction = document.createElement("li");
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",  

      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });


    newTransaction.innerText = ` ${donationAmount} BDT donated on  ${formattedDate}`;
    transactionList.appendChild(newTransaction);
  } else {
    alert("Please enter a valid donation amount.");
  }
}

document.getElementById("donate-flood").addEventListener("click", function() {
  handleDonation("h2-flood", "input-flood", "h2-total");
});

document.getElementById("donate-feni").addEventListener("click", function() {
  handleDonation("h2-feni", "input-feni", "h2-total");
});

document.getElementById("donate-quota").addEventListener("click", function() {
  handleDonation("h2-quota", "input-quota", "h2-total");
});

  
 */

function handleDonation(h2Id, inputId, totalId, donationAreaId) {
  const currentAmountText = document.getElementById(h2Id).innerText;
  let currentAmount = parseFloat(currentAmountText.replace(" BDT", ""));

  const donationInput = document.getElementById(inputId).value;
  const donationAmount = parseFloat(donationInput);

  if (donationAmount > 0) {
    currentAmount += donationAmount;
    document.getElementById(h2Id).innerText = `${currentAmount} BDT`;

    const totalAmountText = document.getElementById(totalId).innerText;
    let totalAmount = parseFloat(totalAmountText.replace(" BDT", ""));
    totalAmount -= donationAmount;
    document.getElementById(totalId).innerText = `${totalAmount} BDT`;

    document.getElementById(inputId).value = "";

    const transactionList = document.getElementById("transaction-list");
    const newTransaction = document.createElement("li");

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    const donationAreaText = document.getElementById(donationAreaId).innerText;

    newTransaction.innerText = `${donationAmount} BDT donated to ${donationAreaText} on ${formattedDate}`;
    transactionList.appendChild(newTransaction);
  } else {
    alert("Please enter a valid donation amount.");
  }
}

document.getElementById("donate-flood").addEventListener("click", function() {
  handleDonation("h2-flood", "input-flood", "h2-total", "donation-area-flood");
});

document.getElementById("donate-feni").addEventListener("click", function() {
  handleDonation("h2-feni", "input-feni", "h2-total", "donation-area-feni");
});

document.getElementById("donate-quota").addEventListener("click", function() {
  handleDonation("h2-quota", "input-quota", "h2-total", "donation-area-quota");
});
