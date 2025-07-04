// Select the AI card element
const aiCard = document.getElementById('aiCard');

// Add click event listener
aiCard.addEventListener('click', () => {
    console.log('AI-Powered Personalized Paths card clicked!');
    fetchData(); // Call the function to fetch data
});

// Function to fetch data from the backend
async function fetchData() {
    try {
        const response = await fetch('/api/prerequisites'); // Adjust the endpoint as needed
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        updateUI(data); // Call the function to update the UI
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to update the UI with fetched data
function updateUI(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = JSON.stringify(data, null, 2); // Format the data for display
}
