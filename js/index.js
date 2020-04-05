/* ------------- Loading page ----------- */
$(window).on("load", function() {
  $('.loading-page').hide();
});

/* ---------- Navbar mobile view---------- */
$(document).ready(function() {
           $(".menu-icon").on("click", function() {
                 $("nav ul").toggleClass("showing");
           });
     });

/* ------------- Scrolling Effect ------------- */
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
         $('nav').addClass('black');
    }

    else {
         $('nav').removeClass('black');

    }
})

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
         $('menu-icon').addClass('black');
    }

    else {
         $('menu-icon').removeClass('black');
    }
})

/* ---- Word of the week audio button ---- */
$(document).ready(function() {
  $(".volume").click(function() {
    var audio = $("#word-audio")[0];
    audio.play();
  })
})

/* ----- Team Page ----- */
$(function() {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 500);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 500);
        }
    });
});

$(document).ready(function() {
  $(document).delegate('.open', 'click', function(event) {
    $(this).addClass('oppenned');
    event.stopPropagation();
  })
  $(document).delegate('body', 'click', function(event) {
    $('.open').removeClass('oppenned');
  })
  $(document).delegate('.cls', 'click', function(event) {
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
});
