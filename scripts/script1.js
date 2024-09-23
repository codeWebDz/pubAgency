document.addEventListener("DOMContentLoaded", function() {
    const serviceSelect = document.getElementById('serviceSelect');
    const choice1Div = document.getElementById('choice1');

    serviceSelect.addEventListener('change', function() {
        if (serviceSelect.value === 'impression') {
            choice1Div.style.display = 'block';
        } else {
            choice1Div.style.display = 'none';
        }
    });

    // Afficher choice1 lorsque l'option "Impression" est sélectionnée
    const impressionOption = document.querySelector('option[value="impression"]');
    impressionOption.addEventListener('click', function() {
        choice1Div.style.display = 'block';
    });
});
