import $ from 'jquery'



$('.yh-tab-title').on('click', function() {
  let idx = $(this).data('idx')
  $('.yh-tab-titles').css('backgroundImage', `url("/images/myk/yh-tab-${idx}.png")`)
  $('.yh-tab-content').hide().eq(idx - 1).show()
}).first().trigger('click')
