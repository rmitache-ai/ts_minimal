define(["require", "exports", "dojo/_base/declare"], function (require, exports, declare) {
    return function () {
        var mixins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mixins[_i] = arguments[_i];
        }
        return function (target) {
            var targetType = target;
            // für IE:
            if (typeof (targetType.name) == "undefined") {
                return declare(mixins, target.prototype);
            }
            // für die restliche Welt:
            else {
                return declare(targetType.name, mixins, target.prototype);
            }
        };
    };
});
//# sourceMappingURL=declareDecorator.js.map