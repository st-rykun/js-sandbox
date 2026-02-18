// Simple JavaScript file for js-sandbox
console.log('JavaScript file loaded successfully!');

// Add some content to the page
document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        contentDiv.innerHTML = '<p>JavaScript is working! This content was added by script.js</p>';
    }
});
