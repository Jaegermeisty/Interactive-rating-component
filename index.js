const submitButton = document.querySelector('.submit-btn');
const ratingText = document.querySelector('.the-rating');

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[name="rating"]').forEach(radio => {
    radio.checked = false;
  });
});

submitButton.addEventListener('click', () => {
  const selectedRating = document.querySelector('input[name="rating"]:checked');

  if (!selectedRating) {
    alert('Please select a rating.');
    return;
  }

  const rating = selectedRating.value;
  ratingText.textContent = `You selected ${rating} out of 5`;

  document.querySelector('.rating-state').style.display = 'none';
  document.querySelector('.final-state').style.display = 'flex';
});