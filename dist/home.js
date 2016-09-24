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
    global.home = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _jquery2.default)('.home-3-action').on('mouseenter mouseleave', function (evt) {
    var $elem = (0, _jquery2.default)(this).find('img');
    var src = $elem.prop('src');
    var matched = src.match(/(.*?home-3-)([\w|-]+)(.png)/);
    $elem.prop('src', matched[1] + (matched[2].length === 1 ? matched[2] + '-active' : matched[2].substr(0, matched[2].indexOf('-'))) + matched[3]);
  });

  (0, _jquery2.default)('.home-6-btn').on('click', function () {

    var name = (0, _jquery2.default)('[name="name"]').val().trim(),
        contact = (0, _jquery2.default)('[name="contact"]').val().trim(),
        description = (0, _jquery2.default)('[name="description"]').val().trim();

    if (!name) alert('还没有填写姓名');else if (!contact) alert('还没有填写联系方式');else if (!description) alert('还没有填写内容');else _jquery2.default.post('#', {
      name: name,
      contact: contact,
      description: description
    }).then(function (_) {
      alert('提交成功');
    }, function (_) {
      alert('提交失败');
    });
  });

  var carouselCurrFrame = 0;
  var carouselCurrLength = (0, _jquery2.default)('.home-carousel-frame').length;
  (0, _jquery2.default)('.home-carousel').height(screen.availHeight - 88);
  (0, _jquery2.default)('.home-carousel').width(carouselCurrLength * 100 + '%');
  (0, _jquery2.default)('.home-carousel-frame').width(1 / 3 * 100 + '%');

  function runCarousel() {
    (0, _jquery2.default)('.home-carousel').animate({ left: -100 * carouselCurrFrame + '%' }, 1200, function () {
      carouselCurrFrame = carouselCurrFrame >= carouselCurrLength - 1 ? 0 : carouselCurrFrame + 1;
    });
  }

  setInterval(runCarousel, 4567);
});