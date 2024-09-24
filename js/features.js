const showDonationButton = document.getElementById('show-donation');
const showHistoryButton = document.getElementById('show-history');
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');

showDonationButton.addEventListener('click', function () {
    showDonationButton.style.backgroundColor = 'green';
    showHistoryButton.style.backgroundColor = 'gray';
    showDonationButton.style.color = 'white';
    donationSection.style.display = 'block';
    historySection.style.display = 'none';
    
});

showHistoryButton.addEventListener('click', function () {
    showHistoryButton.style.backgroundColor = 'green';
    showDonationButton.style.backgroundColor = 'gray';
    showHistoryButton.style.color = 'white';
    donationSection.style.display = 'none';
    historySection.style.display = 'block';

});