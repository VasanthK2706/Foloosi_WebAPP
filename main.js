window.addEventListener('load', function() {
    const links = document.querySelectorAll('.suffleimg a');

    links.forEach(link => {
        link.classList.add('show');
    });
});
const scrollContainer = document.getElementById('scrollContainer');

function scrollLeft() {
    scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
    scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
}