
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

  $('#textHover').mouseenter(pls)
  $('#textHover').mouseleave(unPls)

  $('.trigger').click(toggleModal)
  $('.close-button').click(toggleModal)
