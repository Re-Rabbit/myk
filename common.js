import $ from 'jquery'


function toggleHeaderActive() {
  let path = location.pathname
  let mpath = path.substr(path.lastIndexOf('/') + 1)

  $(`.header-container a`).children().removeClass('active')
  $(`.header-container a[href$="${mpath}"]`).children().addClass('active')
}


let mapstimer


function maps() {
  let map = new AMap.Map($('.map-container')[0],{
    resizeEnable: true,
    zoom: 10,
    center: [112.5650543, 37.81794196]
  })
  let marker = new AMap.Marker({
    position:[112.5650543, 37.81794196]
  })
  let info = new AMap.InfoWindow({
    content: '<div class="title">高德地图</div><div class="content">'+
      '高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。<br/>',
    offset:new AMap.Pixel(0,-28),
    size:new AMap.Size(200,0)
  })


  marker.setMap(map)
  map.setFitView()
  info.open(map, marker.getPosition())
}


function toggleMaps() {
  $('.map-overlay').on('click', function() {
    $('.map').height(460)
    $('.map-container').height(460).empty()
    $('.map-dd').show()
    $(this).hide()
    clearTimeout(mapstimer)
    mapstimer = setTimeout(maps, 1000)
  })
  $('.map-dd').on('click', function() {
    $('.map').height(90)
    $('.map-container').height(90).empty()
    $('.map-overlay').show()
    $(this).hide()
    clearTimeout(mapstimer)
    mapstimer = setTimeout(maps, 1000)
  })
}


function sidebar() {
  $('.home-0-block').on('mouseenter mouseleave', function(evt) {
    let $elem = $(this).find('img')
    let src = $elem.prop('src')
    let matched = src.match(/(.*?home-0-)([\w|-]+)(.png)/)
    $elem.prop('src', matched[1] +
               (matched[2].length === 1 ? matched[2] + '-active' : matched[2].substr(0, matched[2].indexOf('-'))) +
               matched[3])
  })
}


function main() {
  sidebar()
  toggleHeaderActive()
  toggleMaps()
  clearTimeout(mapstimer)
  mapstimer = setTimeout(maps, 1000)
}

main()
