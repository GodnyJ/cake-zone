document.addEventListener('DOMContentLoaded', function () {
    
    const allNavLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    allNavLinks.forEach(link => link.addEventListener('click', () => navbarCollapse?.classList.remove('show')))

})