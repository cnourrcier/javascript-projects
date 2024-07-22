function calculateDays() {
    // Get the input dates
    const date1 = document.getElementById('date1').value;
    const date2 = document.getElementById('date2').value;
    const checkbox = document.getElementById('checkbox');

    // Convert input strings to Date objects
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    // Check if the dates are valid
    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById('result').innerText = "Invalid date(s). Please enter valid dates.";
        return;
    }

    // Calculate the difference in time
    const timeDifference = endDate - startDate;

    // Convert time difference from milliseconds to days
    let daysDifference = timeDifference / (1000 * 3600 * 24);

    // If the checkbox is checked, include the last day in the calculation
    if (checkbox.checked) {
        daysDifference += 1;
    }

    // Display the result
    document.getElementById('result').innerText = `The number of days between the dates is: ${daysDifference}`;
}