
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

  $('.navpic').click(sound)

  $('#textHover').mouseenter(pls)
  $('#textHover').mouseleave(unPls)

  $('.trigger').click(toggleModal)
  $('.close-button').click(toggleModal)
