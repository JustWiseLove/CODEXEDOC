// Toggle dropdown for character content
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.character-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Close all other open dropdowns
            document.querySelectorAll('.character-content.active').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle the clicked dropdown
            if (!isActive) {
                content.classList.add('active');
            }
        });
    });
});

// Placeholder for other page interactions
function initializePage(pageClass) {
    console.log(`Initializing ${pageClass}`);
    // Add specific JS for each page if needed
}

document.addEventListener('DOMContentLoaded', () => {
    const bodyClass = document.body.className;
    if (bodyClass.includes('characters-page')) initializePage('characters-page');
    if (bodyClass.includes('discussion-page')) initializePage('discussion-page');
    if (bodyClass.includes('explained-page')) initializePage('explained-page');
    if (bodyClass.includes('foundation-page')) initializePage('foundation-page');
    if (bodyClass.includes('personality-page')) initializePage('personality-page');
    if (bodyClass.includes('questions-page')) initializePage('questions-page');
    if (bodyClass.includes('resources-page')) initializePage('resources-page');
    if (bodyClass.includes('scriptures-page')) initializePage('scriptures-page');
});
