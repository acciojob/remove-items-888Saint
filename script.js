// Select the dropdown and button elements
const colorSelect = document.getElementById('colorSelect');
const button = document.querySelector('input[type="button"]');

// Add click event listener to the button
button.addEventListener('click', () => {
    // Get the selected index
    const selectedIndex = colorSelect.selectedIndex;

    // Check if any option is selected
    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    } else {
        alert('Please select a color to remove.');
    }
});
