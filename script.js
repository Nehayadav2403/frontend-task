document.addEventListener("DOMContentLoaded", function () {
    const unitOptions = document.querySelectorAll(".option");

    unitOptions.forEach(option => {
        const radioInput = option.querySelector("input[type='radio']");
        const selectionRows = option.querySelectorAll(".selection-row");

        // Initially hide all selection rows
        selectionRows.forEach(row => row.style.display = "none");

        radioInput.addEventListener("click", function () {
            // Hide all dropdowns in other options
            document.querySelectorAll(".selection-row").forEach(row => {
                row.style.display = "none";
            });

            // Show dropdowns only for the selected option
            selectionRows.forEach(row => {
                row.style.display = "block";
            });
        });
    });
});
