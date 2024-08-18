// script.js
$(document).ready(function() {
    $('#calculateBtn').click(function() {
        // Get input values
        const age = parseInt($('#age').val());
        const coverage = parseInt($('#coverage').val());
        const term = parseInt($('#term').val());
        
        // Validate inputs
        if (isNaN(age) || isNaN(coverage) || isNaN(term)) {
            alert('Please enter valid numbers in all fields.');
            return;
        }

        // Simple premium calculation formula
        // Note: This is a placeholder formula; replace with your actual calculation logic
        const baseRate = 0.05; // Base rate as a percentage
        const ageFactor = 0.02; // Additional rate per year of age
        const termFactor = 0.01; // Additional rate per year of coverage term
        const premium = (coverage * baseRate) + (age * ageFactor) + (term * termFactor);

        // Display result
        $('#result').text(`Estimated Premium: €${premium.toFixed(2)}`);
    });
});
