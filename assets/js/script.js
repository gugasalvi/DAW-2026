const categoryLinks = document.querySelectorAll('nav a');
const selectedCategory = document.getElementById('selected-category');

categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        selectedCategory.textContent = link.textContent;

        categoryLinks.forEach(function(categoryLink) {
            categoryLink.classList.remove('active');
        });

        link.classList.add('active');
    });
});