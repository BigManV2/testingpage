// Function to get URL parameters
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Change the text based on the URL parameter
function changeText() {
    const newText = getURLParameter('text');
    if (newText) {
        document.getElementById('dynamicText').innerText = newText;
    }
}

// Change the title based on the URL parameter
function changeTitle() {
    const newTitle = getURLParameter('title');
    if (newTitle) {
        document.title = newTitle; // Change the document title
        document.getElementById('dynamicTitle').innerText = newTitle; // Assuming there's an element with this ID
    }
}

// Call both functions
function pushParam() {
    changeText(); // Call the function
    changeTitle(); // Call the function
}

// Call the function when the page loads
window.onload = pushParam;
