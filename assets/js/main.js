function toggleModal () {
  $('.modal').toggleClass('show-modal')
  $('body').toggleClass('stop-scrolling')
}

$('a[href*="#"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          // var $target = $(target);
          // $('#testing').focus()
          // $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
        });
      }
    }
  });
const originalText = $('#textHover').text()

function pls () {
  $('#textHover').text(originalText + ', pls')
}

function unPls () {
  $('#textHover').text(originalText)
}

const originalEmail = $('#email').text()
function sound () {
  $('#email').text() === originalEmail ? $('#email').text('MindYourVolumeSorry') : $('#email').text(originalEmail)
  $('audio').toggleClass('show-audio')
}

$('.navpic').click(sound)

$('#textHover').mouseenter(pls)
$('#textHover').mouseleave(unPls)

$('.trigger').click(toggleModal)
$('.close-button').click(toggleModal)
