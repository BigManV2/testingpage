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
// Call the function when the page loads
window.onload = changeText;
