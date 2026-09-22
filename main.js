let menu = document.querySelector(".fixed-menu");

menu.addEventListener('click', function(event) {
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active');
    let body = document.querySelector('body')
    let mobileMenu = document.querySelector('.mobile-menu')
    if (!body.classList.contains("off-scroll") &&
!mobileMenu.classList.contains('hide') ) {
body.classList.add("off-scroll");
}
else{
body.classList.remove("off-scroll");
}
    
    if (clickTarget.classList.contains('nav-link')) {
        clickTarget.classList.add('active');
        activeBtn.classList.remove('active');
        let mobile = document.querySelector(".mobile-menu")
        if (!mobile.classList.contains("hide")) {
            mobile.classList.add("hide")
        }
    }
});
document.querySelector(".mobile-button").addEventListener("click", function(event) {
    document.querySelector(".mobile-menu").classList.toggle("hide")
    document.querySelectorAll(".mobile-btn").forEach(function(i) {
        i.classList.toggle("btn-hide")
    })
})