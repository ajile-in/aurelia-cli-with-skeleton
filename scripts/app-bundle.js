define('app',['exports', 'aurelia-framework', 'aurelia-fetch-client'], function (exports, _aureliaFramework, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = undefined;

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
        function App(http) {
            _classCallCheck(this, App);

            this.message = 'Hello World! - Users';

            this.http = http;

            this.users = [];
        }

        App.prototype.activate = function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var http, response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return fetch;

                            case 3:
                                http = this.http = this.getHttpClient();


                                http.configure(function (config) {
                                    config.useStandardConfiguration().withBaseUrl('http://localhost:3000/');
                                });

                                _context.next = 7;
                                return http.fetch('users');

                            case 7:
                                response = _context.sent;
                                _context.next = 10;
                                return response.json();

                            case 10:
                                this.users = _context.sent;
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](0);

                                console.log("***** Error : " + _context.t0);

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 13]]);
            }));

            function activate() {
                return _ref.apply(this, arguments);
            }

            return activate;
        }();

        return App;
    }()) || _class);
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
define('users',['exports', 'aurelia-framework', 'aurelia-fetch-client'], function (exports, _aureliaFramework, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Users = undefined;

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

    var Users = exports.Users = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.Lazy.of(_aureliaFetchClient.HttpClient)), _dec(_class = function () {
        function Users(getHttpClient) {
            _classCallCheck(this, Users);

            this.heading = 'Github Users';
            this.users = [];

            this.getHttpClient = getHttpClient;
        }

        Users.prototype.activate = function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var http, response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch;

                            case 2:
                                http = this.http = this.getHttpClient();


                                http.configure(function (config) {
                                    config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
                                });

                                _context.next = 6;
                                return http.fetch('users');

                            case 6:
                                response = _context.sent;
                                _context.next = 9;
                                return response.json();

                            case 9:
                                this.users = _context.sent;

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function activate() {
                return _ref.apply(this, arguments);
            }

            return activate;
        }();

        return Users;
    }()) || _class);
});
define('welcome',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Welcome = exports.Welcome = function () {
    function Welcome() {
      _classCallCheck(this, Welcome);

      this.heading = 'Welcome to the Aurelia Navigation App!';
      this.firstName = 'John';
      this.lastName = 'Doe';
      this.previousValue = this.fullName;
    }

    Welcome.prototype.submit = function submit() {
      this.previousValue = this.fullName;
      alert('Welcome, ' + this.fullName + '!');
    };

    Welcome.prototype.canDeactivate = function canDeactivate() {
      if (this.fullName !== this.previousValue) {
        return confirm('Are you sure you want to leave?');
      }
    };

    _createClass(Welcome, [{
      key: 'fullName',
      get: function get() {
        return this.firstName + ' ' + this.lastName;
      }
    }]);

    return Welcome;
  }();

  var UpperValueConverter = exports.UpperValueConverter = function () {
    function UpperValueConverter() {
      _classCallCheck(this, UpperValueConverter);
    }

    UpperValueConverter.prototype.toView = function toView(value) {
      return value && value.toUpperCase();
    };

    return UpperValueConverter;
  }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n</template>\n"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\n        <span class=\"sr-only\">Toggle Navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-home\"></i>\n        <span>${router.title}</span>\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"skeleton-navigation-navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n          <a data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse.in\" href.bind=\"row.href\">${row.title}</a>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</template>\n"; });
define('text!users.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./blur-image\"></require>\n\n  <section class=\"au-animate\">\n    <h2>${heading}</h2>\n    <div class=\"row au-stagger\">\n      <div class=\"col-sm-6 col-md-3 card-container au-animate\" repeat.for=\"user of users\">\n        <div class=\"card\">\n          <canvas class=\"header-bg\" width=\"250\" height=\"70\" blur-image.bind=\"image\"></canvas>\n          <div class=\"avatar\">\n            <img src.bind=\"user.avatar_url\" crossorigin ref=\"image\"/>\n          </div>\n          <div class=\"content\">\n            <p class=\"name\">${user.login}</p>\n            <p><a target=\"_blank\" class=\"btn btn-default\" href.bind=\"user.html_url\">Contact</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
define('text!welcome.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"au-animate\">\n    <h2>${heading}</h2>\n    <form role=\"form\" submit.delegate=\"submit()\">\n      <div class=\"form-group\">\n        <label for=\"fn\">First Name</label>\n        <input type=\"text\" value.bind=\"firstName\" class=\"form-control\" id=\"fn\" placeholder=\"first name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"ln\">Last Name</label>\n        <input type=\"text\" value.bind=\"lastName\" class=\"form-control\" id=\"ln\" placeholder=\"last name\">\n      </div>\n      <div class=\"form-group\">\n        <label>Full Name</label>\n        <p class=\"help-block\">${fullName | upper}</p>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </section>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map