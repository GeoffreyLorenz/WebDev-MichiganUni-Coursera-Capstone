Array.from(document.querySelectorAll('.see-more-icon'), function (elem) {
    elem.addEventListener('click', function hideContent(e) {
        e.currentTarget.parentNode.querySelector('.card-text')
                       .classList.toggle('visible');
        e.currentTarget.parentNode.querySelector('.see-more-icon')
                       .classList.toggle('spin');
    });

});
