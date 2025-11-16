// Example for a "Tap/Click to Continue"
document.getElementById('game-intro').addEventListener('ended', (event) => {
    // Hide the video
    event.target.style.display = 'none'; 
    
    // Show the button/text that leads to the login screen
    document.getElementById('continue-prompt').style.display = 'block'; 
});