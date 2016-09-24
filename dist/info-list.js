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
    global.infoList = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _jquery2.default)('.info-tab-title').on('click', function () {
    var idx = (0, _jquery2.default)(this).data('idx');
    (0, _jquery2.default)('.info-tab-title').removeClass('active').eq(idx - 1).addClass('active');
    (0, _jquery2.default)('.info-tabcontent').hide().eq(idx - 1).show();
  }).first().trigger('click');
});