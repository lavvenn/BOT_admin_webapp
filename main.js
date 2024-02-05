window.addEventListener('scroll', function() {
    var element = document.getElementsByClassName('user-set');
    var scrollPosition = window.scrollY;
    element.style.transform = 'translateY(' + scrollPosition + 'px)';
});