// var modal = document.querySelector(".modal");

    function toggleModal () {
        $('.modal').toggleClass('show-modal')
        $('body').toggleClass('stop-scrolling')
    }

    const originalText = $('#textHover').text()
    console.log(originalText)

    function pls () {
      $('#textHover').text(originalText + ', pls')
    }

    function unPls () {
      $('#textHover').text(originalText)
    }

    $('#textHover').mouseenter(pls)
    $('#textHover').mouseleave(unPls) 
    // function windowOnClick(event) {
    //     if (event.target === modal) {
    //         toggleModal();
    //     }
    //     console.log('windowclicking')
    // }

    // trigger.addEventListener("click", toggleModal);
    $('.trigger').click(toggleModal)
    $('.close-button').click(toggleModal)
    // window.addEventListener("click", windowOnClick);
