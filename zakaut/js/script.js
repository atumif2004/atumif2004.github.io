// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu'),
//     menuItem = document.querySelectorAll('.menu_item'),
//     hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger_active');
//         menu.classList.toggle('menu_active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger_active');
//             menu.classList.toggle('menu_active');
//         })
//     })
// })

$(document).ready(function(){


    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });

$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
});

// function validateForms(form){
//     $(form).validate({
//         rules: {
//             name: {
//                 required: true,
//                 minlength: 2
//             },
//             phone: "required",
//             email: {
//                 required: true,
//                 email: true
//             }
//         },
//         messages: {
//             name: {
//                 required: "Пожалуйста, введите свое имя",
//                 minlength: jQuery.validator.format("Введите {0} символа!")
//               },
//             phone: "Пожалуйста, введите свой номер телефона",
//             email: {
//               required: "Пожалуйста, введите свою почту",
//               email: "Неправильно введен адрес почты"
//             }
//         }
//     });
// };

// validateForms('#consultation-form');
// validateForms('#consultation form');
// validateForms('#order form');

    $(window).scroll(function() {
        if($(this).scrollTop() > 1100) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

});
       