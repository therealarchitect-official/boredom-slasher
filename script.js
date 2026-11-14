const redButton = document.getElementById('red-button');
const displayContainer = document.getElementById('display-container');

redButton.addEventListener('click', () => {
    if (websites.length === 0) {
        alert("No websites loaded!");
        return;
    }

    // Pick a random website object from the array
    const randomIndex = Math.floor(Math.random() * websites.length);
    const selectedSite = websites[randomIndex];

    // Clear previous content
    displayContainer.innerHTML = '';

    // Create an iframe to embed the site (fallback to opening a link if blocked)
    const iframe = document.createElement('iframe');
    iframe.src = selectedSite.url;
    iframe.title = selectedSite.name;
    
    // Optional fallback message if iframe refuses connection
    iframe.onerror = () => {
        displayContainer.innerHTML = `<p>Couldn't load inside iframe. <a href="${selectedSite.url}" target="_blank">Click here to open ${selectedSite.name}</a></p>`;
    };

    displayContainer.appendChild(iframe);
});
