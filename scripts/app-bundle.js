var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello world';
            this.text = ko.observable('foo');
            this.foo = { bar: 'Quick brown fox' };
        }
        App.prototype.update = function () {
            this.message = this.reverse(this.message);
            this.text(this.reverse(this.text()));
            this.foo.bar = this.reverse(this.foo.bar);
            console.log('text: ' + this.text());
            console.log('foo.bar: ' + this.foo.bar);
        };
        App.prototype.reverse = function (text) {
            return text.split('').reverse().join('');
        };
        return App;
    }());
    exports.App = App;
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], App.prototype, "message", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], App.prototype, "text", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], App.prototype, "foo", void 0);
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-breeze');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/adapters/observation-adapter',["require", "exports"], function (require, exports) {
    "use strict";
    var KnockoutObservationAdapter = (function () {
        function KnockoutObservationAdapter() {
            console.log('KnockoutObservationAdapter created');
        }
        KnockoutObservationAdapter.prototype.getObserver = function (object, propertyName, descriptor) {
            console.log('observing...');
        };
        return KnockoutObservationAdapter;
    }());
    exports.KnockoutObservationAdapter = KnockoutObservationAdapter;
});

define('resources/index',["require", "exports", "aurelia-binding", "./adapters/observation-adapter"], function (require, exports, aurelia_binding_1, observation_adapter_1) {
    "use strict";
    function configure(config) {
        config.container.get(aurelia_binding_1.ObserverLocator).addAdapter(new observation_adapter_1.KnockoutObservationAdapter());
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n  <h1>${text()}</h1>\n  <h1>${foo.bar}</h1>\n  <button click.trigger=\"update()\">Click me</button>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map