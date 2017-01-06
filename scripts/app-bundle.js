define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('resources/value-converters/converters',["exports", "numeral"], function (exports, _numeral) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CurrencyFormatValueConverter = undefined;

    var _numeral2 = _interopRequireDefault(_numeral);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CurrencyFormatValueConverter = exports.CurrencyFormatValueConverter = function () {
        function CurrencyFormatValueConverter() {
            _classCallCheck(this, CurrencyFormatValueConverter);
        }

        CurrencyFormatValueConverter.prototype.toView = function toView(value) {
            _numeral2.default.language("nl-nl", nl);
            _numeral2.default.language("nl-nl");
            return (0, _numeral2.default)(value).format("$0,0.[00]");
        };

        return CurrencyFormatValueConverter;
    }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n\n  <span>${price | currencyFormat}</span>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map