// Function to get URL parameters
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Change the title based on the URL parameter
function changeTitle() {
    const newTitle = getURLParameter('title');
    if (newTitle) {
        document.title = newTitle; // Change the document title
    }
}

// Change Open Graph title based on URL parameter
function changeOgTitle() {
    const newOgTitle = getURLParameter('ogTitle');
    if (newOgTitle) {
        const metaOgTitle = document.querySelector('meta[property="og:title"]');
        if (metaOgTitle) {
            metaOgTitle.setAttribute('content', newOgTitle);
        }
    }
}

// Change Open Graph description based on URL parameter
function changeOgDescription() {
    const newOgDescription = getURLParameter('ogDescription');
    if (newOgDescription) {
        const metaOgDescription = document.querySelector('meta[property="og:description"]');
        if (metaOgDescription) {
            metaOgDescription.setAttribute('content', newOgDescription);
        }
    }
}

// Change Open Graph image based on URL parameter
function changeOgImage() {
    const newOgImage = getURLParameter('ogImage');
    if (newOgImage) {
        const metaOgImage = document.querySelector('meta[property="og:image"]');
        if (metaOgImage) {
            metaOgImage.setAttribute('content', newOgImage);
        }
    }
}

// Call all functions on page load
function init() {
    changeTitle(); 
    changeOgTitle();
    changeOgDescription();
    changeOgImage();
}

// Assign the init function to window.onload
window.onload = init;
