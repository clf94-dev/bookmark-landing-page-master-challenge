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
    var myCarousel = $('#myCarousel');
    var myNav = myCarousel.prev();
    const oneClick = document.querySelector('#one-click');
    const search = document.querySelector('#search');
    const share = document.querySelector('#share');
    var element = document.getElementById("one-click");
    var element1 = document.getElementById("search");
    var element2 = document.getElementById("share");

    oneClick.onclick = () => {


        myNav.find('button.active').removeClass("active");
        element.classList.add("active");

    };
    search.onclick = () => {


        myNav.find('button.active').removeClass("active");
        element1.classList.add("active");
    };
    share.onclick = () => {

        const indexShare = 3;
        var newLI = myNav.children().eq(indexShare);

        if (!newLI.hasClass('active')) {
            myNav.find('button.active').removeClass('active');
            newLI.addClass('active');
        }

    };
    /*
          buttonLinks.addEventListener('click', () => {
            if (document.getElementById('one-click')) {
                myNav.find('button.active').removeClass('active');
                document.getElementsByClassName('one-click').addClass('active');
            };
            if (document.getElementById('search')) {
                myNav.find('button.active').removeClass('active');
                document.getElementsByClassName('search').addClass('active');
            };
            if (document.getElementById('share')) {
                myNav.find('button.active').removeClass('active');
                document.getElementsByClassName('share').addClass('active');
            };
        });

    */
    /* buttonLinks.addEventListener('click', () => {
         buttonLinks.forEach((button, index) => {
             console.log(index);
             var newIndex = $(index);
             myCarousel.carousel(newIndex);
         });

     })


     myCarousel.on('slid.bs.carousel', function() {
         var newIndex = $(this).find('.carousel-inner>.active').index();
         var newLI = myNav.children().eq(newIndex);
         if (!newLI.hasClass('active')) {
             myNav.find('button.active').removeClass('active');
             newLI.addClass('active');
         }
     });*/
};
navSlide();
carouselSlide();