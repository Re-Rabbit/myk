(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jQuery);
    global.common = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function toggleHeaderActive() {
    var path = location.pathname;
    var mpath = path.substr(path.lastIndexOf('/') + 1);

    (0, _jquery2.default)('.header-container a').children().removeClass('active');
    (0, _jquery2.default)('.header-container a[href$="' + mpath + '"]').children().addClass('active');
  }

  var mapstimer = void 0;

  function maps() {
    var map = new AMap.Map((0, _jquery2.default)('.map-container')[0], {
      resizeEnable: true,
      zoom: 10,
      center: [112.5650543, 37.81794196]
    });
    var marker = new AMap.Marker({
      position: [112.5650543, 37.81794196]
    });
    var info = new AMap.InfoWindow({
      content: '<div class="title">高德地图</div><div class="content">' + '高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。<br/>',
      offset: new AMap.Pixel(0, -28),
      size: new AMap.Size(200, 0)
    });

    marker.setMap(map);
    map.setFitView();
    info.open(map, marker.getPosition());
  }

  function toggleMaps() {
    (0, _jquery2.default)('.map-overlay').on('click', function () {
      (0, _jquery2.default)('.map').height(460);
      (0, _jquery2.default)('.map-container').height(460).empty();
      (0, _jquery2.default)('.map-dd').show();
      (0, _jquery2.default)(this).hide();
      clearTimeout(mapstimer);
      mapstimer = setTimeout(maps, 1000);
    });
    (0, _jquery2.default)('.map-dd').on('click', function () {
      (0, _jquery2.default)('.map').height(90);
      (0, _jquery2.default)('.map-container').height(90).empty();
      (0, _jquery2.default)('.map-overlay').show();
      (0, _jquery2.default)(this).hide();
      clearTimeout(mapstimer);
      mapstimer = setTimeout(maps, 1000);
    });
  }

  function sidebar() {
    (0, _jquery2.default)('.home-0-block').on('mouseenter mouseleave', function (evt) {
      var $elem = (0, _jquery2.default)(this).find('img');
      var src = $elem.prop('src');
      var matched = src.match(/(.*?home-0-)([\w|-]+)(.png)/);
      $elem.prop('src', matched[1] + (matched[2].length === 1 ? matched[2] + '-active' : matched[2].substr(0, matched[2].indexOf('-'))) + matched[3]);
    });
  }

  function main() {
    sidebar();
    toggleHeaderActive();
    toggleMaps();
    clearTimeout(mapstimer);
    mapstimer = setTimeout(maps, 1000);
  }

  main();
});