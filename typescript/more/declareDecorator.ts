import * as declare from 'dojo/_base/declare';

/**
 * A decorator that converts a TypeScript class into a declare constructor.
 * This allows declare constructors to be defined as classes, which nicely
 * hides away the `declare([], {})` boilerplate.
 */
export = function (...mixins: Object[]) {
    return function (target: Function) {
        let targetType: any = target;

        // für IE:
        if (typeof (targetType.name) == "undefined") {
            return declare(mixins, target.prototype);
        }
        // für die restliche Welt:
        else {
            return declare(targetType.name, mixins, target.prototype);
        }
    };
}