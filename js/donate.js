
function handleDonation(h2Id, inputId) {
    const currentAmountText = document.getElementById(h2Id).innerText;
    let currentAmount = parseFloat(currentAmountText.replace(" BDT", "")) || 0;
  
    const donationInput = document.getElementById(inputId).value;
    const donationAmount = parseFloat(donationInput) || 0;
  
    const updatedAmount = currentAmount + donationAmount;
  
    document.getElementById(h2Id).innerText = `${updatedAmount} BDT`;
  
    document.getElementById(inputId).value = "";
  }
  
  document.getElementById("donate-flood").addEventListener("click", function() {
    handleDonation("h2-flood", "input-flood");
  });
  
  document.getElementById("donate-feni").addEventListener("click", function() {
    handleDonation("h2-feni", "input-feni");
  });
  
  document.getElementById("donate-quota").addEventListener("click", function() {
    handleDonation("h2-quota", "input-quota");
  });
  
