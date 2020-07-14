const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                document.getElementById('top').style.opacity = 1;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.3}s`;
                document.getElementById('top').style.opacity = 0.1;
            }
        });

        burger.classList.toggle('toggle');

    });


};

const carouselSlide = () => {
    $("#one-click").click(function() {
        $("#one-click").css({
            "border-bottom-color": " hsl(0, 94%, 66%)",
            "border-bottom-width": "3px"
        });

        $("#search").css("border-bottom-color", "white");

        $("#share").css("border-bottom-color", "white");
        $(".one-click").addClass("active");
        $(".search").removeClass("active");
        $(".share").removeClass("active");
    });
    $("#search").click(function() {
        $("#search").css({
            "border-bottom-color": " hsl(0, 94%, 66%)",
            "border-bottom-width": "3px"
        });

        $("#one-click").css("border-bottom-color", "white");

        $("#share").css("border-bottom-color", "white");
        $(".one-click").removeClass("active");
        $(".search").addClass("active");
        $(".share").removeClass("active");
    });
    $("#share").click(function() {
        $("#share").css({
            "border-bottom-color": " hsl(0, 94%, 66%)",
            "border-bottom-width": "3px"
        });

        $("#one-click").css("border-bottom-color", "white");

        $("#search").css("border-bottom-color", "white");
        $(".one-click").removeClass("active");
        $(".search").removeClass("active");
        $(".share").addClass("active");
    });
}
navSlide();
carouselSlide();