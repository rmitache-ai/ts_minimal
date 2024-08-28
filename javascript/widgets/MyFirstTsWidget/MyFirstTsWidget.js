var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "dojo/text!./MyFirstTsWidget.html", "dijit/_WidgetBase", "dijit/_WidgetsInTemplateMixin", "dijit/_TemplatedMixin", "more/DeclareDecorator"], function (require, exports, template, _WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin, declare) {
    var MyFirstTsWidget = /** @class */ (function () {
        function MyFirstTsWidget() {
            this.templateString = template;
        }
        MyFirstTsWidget.prototype.openCity = function (evt) {
            var cityName = evt.target.innerText;
            this.subTitle.innerText = cityName;
            console.log("cityName", cityName);
            var i;
            var x = document.getElementsByClassName("city");
            for (i = 0; i < x.length; i++) {
                var item = x[i];
                item.style.display = "none"; // alle anderen ausblenden
            }
            this[cityName].style.display = "block";
        };
        MyFirstTsWidget = __decorate([
            declare(_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin)
        ], MyFirstTsWidget);
        return MyFirstTsWidget;
    }());
    return MyFirstTsWidget;
});
//# sourceMappingURL=MyFirstTsWidget.js.map