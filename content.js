// Extract product ID from URL
function extractProductIdFromUrl(url) {
    const urlParts = url.split('/');
    const productIdIndex = urlParts.findIndex(part => part.startsWith('PLID'));
    return productIdIndex !== -1 ? urlParts[productIdIndex] : null;
}

// Create and style the button
function createButton(productId) {
    const iconUrl = 'https://www.servaltracker.com/static/images/favicons/serval_favicon_48x48.png';

    const icon = document.createElement('img');
    icon.src = iconUrl;
    icon.alt = 'Icon';
    icon.width = 24;
    icon.height = 24;

    const buttonText = document.createElement('span');
    buttonText.innerText = 'Track on Serval Tracker';

    const flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';
    flexContainer.style.alignItems = 'center';
    flexContainer.style.justifyContent = 'center';

    flexContainer.appendChild(icon);
    flexContainer.appendChild(buttonText);

    const button = document.createElement('a');
    button.href = `https://www.servaltracker.com/products/${productId}`;
    button.target = '_blank';
    button.style.display = 'block';
    button.style.marginTop = '10px';
    button.style.padding = '10px';
    button.style.backgroundColor = 'gold';
    button.style.color = 'black';
    button.style.textAlign = 'center';
    button.style.textDecoration = 'none';
    button.style.borderRadius = '5px';
    button.appendChild(flexContainer);
    return button;
}

// Add the button after the product title
function addButton() {
    console.log("hello")
    const productId = extractProductIdFromUrl(window.location.href);

    if (productId !== null) {
        const allTitleElements = document.querySelectorAll('.product-title');
        console.log(allTitleElements);
        const titleElement = allTitleElements[allTitleElements.length - 1];
        if (titleElement && !document.querySelector('.serval-button') && allTitleElements.length > 1) {
            const button = createButton(productId);
            button.classList.add('serval-button');
            titleElement.parentNode.insertBefore(button, titleElement.nextSibling);
        }
    }
}


// Callback function for MutationObserver
function callback(mutationsList, observer) {
    addButton();
}

// Create a MutationObserver object and start observing the DOM changes
const observer = new MutationObserver(callback);
observer.observe(document.body, { childList: true, subtree: true });

// Add button on page load
addButton();
try {
  console.log(ujgbkb);
} catch (e) {
  console.log("Expected error:", e);
}