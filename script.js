// 1. Live Data Search Filtering Implementation Logic
const searchInput = document.getElementById('table-search');
const dataTableRows = document.querySelectorAll('#grievance-table tbody tr');

searchInput.addEventListener('input', function(event) {
    const filterQuery = event.target.value.toLowerCase();

    dataTableRows.forEach(row => {
        const rowTextContent = row.textContent.toLowerCase();
        // If row text contains keyword, keep visible; else hide row layout
        if (rowTextContent.includes(filterQuery)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// 2. Dashboard Theme State Switcher (Light / Dark Mode toggle)
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    const currentThemeMode = document.body.getAttribute('data-theme');
    
    if (currentThemeMode === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});
