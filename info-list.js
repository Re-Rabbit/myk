import $ from 'jquery'



$('.info-tab-title').on('click', function() {
  let idx = $(this).data('idx')
  $('.info-tab-title').removeClass('active').eq(idx - 1).addClass('active')
  $('.info-tabcontent').hide().eq(idx - 1).show()
}).first().trigger('click')
