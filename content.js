// content.js

function extractProductIdFromUrl(url) {
	const urlParts = url.split('/');
	const productIdIndex = urlParts.findIndex(part => part.startsWith('PLID'));
	if (productIdIndex !== -1) {
		return urlParts[productIdIndex];
	}
	return null;
}

function addServalTrackerButton() {
	// Check if the current URL matches the Takealot product page pattern
	const productId = extractProductIdFromUrl(window.location.href);
	
	if (productId !== null) {	
	//if (true){
		// Create a button element
		const button = document.createElement('a');
		button.innerText = 'Track on Serval Tracker';
		button.href = "https://www.servaltracker.com/products/"+productId;
				
		// Style the button
		button.style.display = 'block';
		button.style.marginTop = '10px';
		button.style.padding = '10px';
		button.style.backgroundColor = '#4CAF50';
		button.style.color = 'white';
		button.style.textAlign = 'center';
		button.style.textDecoration = 'none';
		button.style.borderRadius = '5px';
		
		// Insert the button after the product title
		const titleElement = document.querySelector('.product-title');
		titleElement.parentNode.insertBefore(button, titleElement.nextSibling);
	}
}

// Wait a bit for the entire product page to load before adding the button
setTimeout(addServalTrackerButton, 2000);