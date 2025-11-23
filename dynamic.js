// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Dark Mode Button
    const darkModeBtn = document.createElement('button');
    darkModeBtn.innerHTML = '🌙 Dark Mode';
    darkModeBtn.style.position = 'fixed';
    darkModeBtn.style.top = '10px';
    darkModeBtn.style.right = '10px';
    darkModeBtn.style.padding = '8px 12px';
    darkModeBtn.style.background = '#333';
    darkModeBtn.style.color = 'white';
    darkModeBtn.style.border = 'none';
    darkModeBtn.style.borderRadius = '5px';
    darkModeBtn.style.cursor = 'pointer';
    darkModeBtn.style.zIndex = '1000';
    
    document.body.appendChild(darkModeBtn);

    // Dark Mode Functionality
    darkModeBtn.addEventListener('click', function() {
        if (document.body.style.background === 'black') {
            // Light Mode
            document.body.style.background = '';
            document.body.style.color = '';
            darkModeBtn.innerHTML = '🌙 Dark Mode';
            darkModeBtn.style.background = '#333';
        } else {
            // Dark Mode
            document.body.style.background = 'black';
            document.body.style.color = 'white';
            darkModeBtn.innerHTML = '☀️ Light Mode';
            darkModeBtn.style.background = '#666';
        }
    });

    // Back to Top Button
    const topBtn = document.createElement('button');
    topBtn.innerHTML = '↑ Top';
    topBtn.style.position = 'fixed';
    topBtn.style.bottom = '10px';
    topBtn.style.right = '10px';
    topBtn.style.padding = '8px 12px';
    topBtn.style.background = '#007bff';
    topBtn.style.color = 'white';
    topBtn.style.border = 'none';
    topBtn.style.borderRadius = '5px';
    topBtn.style.cursor = 'pointer';
    topBtn.style.zIndex = '1000';
    topBtn.style.display = 'none';
    
    document.body.appendChild(topBtn);

    // Show/Hide Back to Top Button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });

    // Scroll to Top
    topBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});