
  function toggleModal () {
      $('.modal').toggleClass('show-modal')
      $('body').toggleClass('stop-scrolling')
  }

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

  // function soundHover () {
  //   $('#email').text('Careful w the volume!')
  // }
  // function soundUnHover () {
  //   $('#email').text(originalEmail)
  // }
  // $('.textSound').click(sound())
  $('.navpic').click(sound)
  // $('.navpic').mouseenter(soundHover)
  // $('.navpic').mouseleave(soundUnHover)

  // function full () {
  //   $('.fullText').toggleClass('capitalize')
  // }
  // $('.fullText').mouseenter(full)
  // $('.fullText').mouseleave(full)

  $('#textHover').mouseenter(pls)
  $('#textHover').mouseleave(unPls)

  $('.trigger').click(toggleModal)
  $('.close-button').click(toggleModal)
