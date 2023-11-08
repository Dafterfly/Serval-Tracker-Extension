function extractProductIdFromUrl(url) {
    const urlParts = url.split('/');
    const productIdIndex = urlParts.findIndex(part => part.startsWith('PLID'));
    if (productIdIndex !== -1) {
        return urlParts[productIdIndex];
    }
    return null;
}

function addButton() {
    
    const productId = extractProductIdFromUrl(window.location.href);
    
    if (productId !== null) {
        // Create a button element
        // Create an image element for the icon
        const icon = document.createElement('img');
        icon.src = 'https://www.servaltracker.com/static/images/favicons/serval_favicon_48x48.png'; // Set the path to your icon
        icon.alt = 'Icon'; // Add alt text for accessibility
        icon.width = 24; // Set the width (adjust as needed)
        icon.height = 24; // Set the height (adjust as needed)
        
        const button = document.createElement('a');
        button.href = "https://www.servaltracker.com/products/" + productId;
        
       // Create a span element for the text
        const buttonText = document.createElement('span');
        buttonText.innerText = 'Track on Serval Tracker';

        // Create a flex container
        const flexContainer = document.createElement('div');
        flexContainer.style.display = 'flex';
        flexContainer.style.alignItems = 'center';
        flexContainer.style.justifyContent = 'center'; // Center horizontally


        // Append the icon and text to the flex container
        flexContainer.appendChild(icon);
        flexContainer.appendChild(buttonText);

        // Append the flex container to the button
        button.appendChild(flexContainer);

        // Style the button
        button.style.display = 'block';
        button.style.marginTop = '10px';
        button.style.padding = '10px';
        button.style.backgroundColor = 'gold';
        button.style.color = 'black';
        button.style.textAlign = 'center';
        button.style.textDecoration = 'none';
        button.style.borderRadius = '5px';
        
        // Insert the button after the product title
        const titleElement = document.querySelector('.product-title');
        if (titleElement) {
            if (titleElement.nextElementSibling.tagName !== 'A') {
                titleElement.parentNode.insertBefore(button, titleElement.nextSibling);
            }
        }
    }
}

function callback(mutationsList, observer) {
	setInterval(addButton, 5000);
}


// Create a MutationObserver object and pass the callback into the constructor
var observer = new MutationObserver(callback);

// Start observing the DOM changes
observer.observe(document.body, { childList: true, subtree: true });


