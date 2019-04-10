$(function () {
    //Preloader
    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    //adding styles to navbar
    if ($('head title').html() != 'LAB Consulting') {

        $(".navbar-mybg").css({
            "box-shadow": "0 4px 0 rgba(188, 187, 215, .1)",
            "border-bottom": "none",
            "border-top": "5px solid #58647a",
            "background": "rgba(200, 203, 219, .5)"
        });

        $(".advice__btn i").css({
            "transform": "rotateY(180deg)",
            "margin-right": "7px"
        });

        $(".info__btn i").css("transform", "rotateY(180deg)");
    }

    if (($('head title').html() === 'Contacts') || ($('head title').html() === 'Services')){
        $(".info__btn i").css("transform", "rotateY(0deg)");
    }


    //adding styles to navbar when scroll
    $(document).scroll(function () {
        $('.navbar-mybg').css('background', 'rgba(200, 203, 219, 1)');
    });

    //create obgect modal
    var modal = {
        self: $('#modal'), //modal window
        showModal: function (content) { //show modal window
            $('.navbar-mybg').css('background', 'rgba(200, 203, 219, 1)');
            this.self.find('#inner-modal').html(content);
            this.self.fadeIn(200);
        },
        hideModal: function () { //fade modal window
            this.self.fadeOut(200);
            this.self.find('#inner-modal').html('');
        }
    };

    if (($('head title').html() === 'About') && $(document).width() < 1200 && $(document).width() > 992) {
        $('.nav-block__content').css('margin-top' , '43px');
    }

    //click to gumburger
    $('.navbar-toggler-icon_mod').click(function(){
        $('.navbar-toggler-icon_mod i').toggleClass('active-gum');
    });

    //handling a button click event "Заказать звонок"
    $(".advice__btn , .info__btn").on('click', function (e) {
            var content = $('#call-order').html();
            modal.showModal(content);
    });
    //handling a click event on a modal window
    $('#modal').on('click', function (e) {
        if ($(e.target).attr('id') === 'modal' || $(e.target).hasClass('close-modal')) {
            modal.hideModal();
        } else {
            return false;
        }
    });

    $('[href="#"]').attr("href", "./error.html");

    //Start animations on the main page
    if ($('head title').html() === 'LAB Consulting') {
        new WOW().init();

        //smooth scroll
        $('.about__btn').click(function () {
            $("html, body").animate({ scrollTop: $('#mission').offset().top + "px" });
            return false;
        });
    }

    if ($('head title').html() === 'Services') {
        //Underline text when hovering
        $('.navigation__item:eq(0) .navigation__link').hover(
            function () {
                $('.content__text:eq(0)').toggleClass('td');
            });
        $('.navigation__item:eq(1) .navigation__link').hover(
            function () {
                $('.content__text:eq(1)').toggleClass('td');
            });
        $('.navigation__item:eq(2) .navigation__link').hover(
            function () {
                $('.content__text:eq(2)').toggleClass('td');
                $('.content__text:eq(3)').toggleClass('td');
            });
        $('.navigation__item:eq(3) .navigation__link').hover(
            function () {
                $('.content__text:eq(4)').toggleClass('td');
                $('.content__text:eq(5)').toggleClass('td');
            });

        //Slider
        $(function () {
            $('.slider').slick({
                slidesToShow: 1,
                slidesToscroll: 1,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000
            });
        });
    }

    //Yandex Maps
    if ($('head title').html() === 'Contacts') {
        ymaps.ready(init);
        var myMap,
            myPlacemark,
            HintLayout;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [46.474244, 30.745981],
                zoom: 17,
                controls: []
            }, {
                    suppressMapOpenBlock: true //remove button "Open in yandex maps...."
                });

            HintLayout = ymaps.templateLayoutFactory.createClass("<div class='hint'>" +
                "{{ properties.address }}" +
                "</div>", {
                }
            );

            if ($(window).width() < 768) {
                myMap.setCenter([46.474244, 30.745981], 17);
            } else {
                myMap.setCenter([46.474216, 30.747960], 17);
            }

            myPlacemark = new ymaps.Placemark([46.474244, 30.745981], {
                address: "Базарная вул., 36"
            }, {
                    hintLayout: HintLayout,
                    iconLayout: 'default#image',
                    iconImageHref: 'img/point.png',
                    iconImageSize: [22, 44],
                    iconImageOffset: [-11, -35]
                });

            myMap.geoObjects.add(myPlacemark);
            myPlacemark.hint.open();
        }
    }
});