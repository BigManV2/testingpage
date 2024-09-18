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
function changeTitle() {
    const newTitle = getURLParameter('title');
    if (newTitle) {
        document.getElementById('dynamicTitle').innerText = newTitle;
    }
}
function pushParam() {
    changeText;
    changeTitle;
}
// Call the function when the page loads
window.onload = pushParam;