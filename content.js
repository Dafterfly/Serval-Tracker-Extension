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
        const button = document.createElement('a');
        button.innerText = 'Track on Serval Tracker';
        button.href = "https://www.servaltracker.com/products/" + productId;
        
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


