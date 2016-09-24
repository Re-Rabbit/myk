import $ from 'jquery'


$('.home-3-action').on('mouseenter mouseleave', function(evt) {
  let $elem = $(this).find('img')
  let src = $elem.prop('src')
  let matched = src.match(/(.*?home-3-)([\w|-]+)(.png)/)
  $elem.prop('src', matched[1] +
                     (matched[2].length === 1 ? matched[2] + '-active' : matched[2].substr(0, matched[2].indexOf('-'))) +
                    matched[3])
})


$('.home-6-btn').on('click', function() {

  let name = $('[name="name"]').val().trim(),
      contact = $('[name="contact"]').val().trim(),
      description = $('[name="description"]').val().trim()

  if(!name) alert('还没有填写姓名')
  else if(!contact) alert('还没有填写联系方式')
  else if(!description) alert('还没有填写内容')
  else
    $.post('#', {
      name: name,
      contact: contact,
      description: description
    }).then(_ => { alert('提交成功') },
            _ => { alert('提交失败') })

})


let carouselCurrFrame = 0
let carouselCurrLength = $('.home-carousel-frame').length
$('.home-carousel').height(screen.availHeight - 88)
$('.home-carousel').width(carouselCurrLength * 100 + '%')
$('.home-carousel-frame').width((1 / 3 * 100) + '%')

function runCarousel() {
  $('.home-carousel').animate({ left: (-100 * carouselCurrFrame)+ '%' }, 1200, function() {
    carouselCurrFrame = (carouselCurrFrame >= carouselCurrLength - 1 ? 0 : carouselCurrFrame + 1)
  })
}

setInterval(runCarousel, 4567)
