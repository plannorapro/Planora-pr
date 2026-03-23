// Minimal needed logic - strictly date
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('trans-date');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
    }
});
