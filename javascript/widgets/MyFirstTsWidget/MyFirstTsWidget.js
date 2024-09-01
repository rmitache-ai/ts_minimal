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
        MyFirstTsWidget.prototype.postCreate = function () {
            this.taskInput = this.domNode.querySelector('#taskInput');
            this.taskList = this.domNode.querySelector('#taskList');
        };
        MyFirstTsWidget.prototype.addTask = function (event) {
            event.preventDefault();
            var taskText = this.taskInput.value.trim();
            if (taskText) {
                var taskItem = this.createTaskItem(taskText);
                this.taskList.appendChild(taskItem);
                this.taskInput.value = '';
            }
        };
        MyFirstTsWidget.prototype.createTaskItem = function (taskText) {
            var _this = this;
            var listItem = document.createElement('li');
            listItem.className = 'w3-light-grey w3-round-large';
            ;
            var taskLabel = document.createElement('span');
            taskLabel.innerText = taskText;
            taskLabel.className = 'w3-large';
            var buttonsContainer = document.createElement('div');
            buttonsContainer.className = 'w3-right';
            var completeButton = this.createButton('Complete', function () {
                taskLabel.classList.toggle('w3-text-green');
                taskLabel.style.textDecoration = taskLabel.style.textDecoration ? '' : 'line-through';
            });
            var deleteButton = this.createButton('Delete', function () {
                _this.taskList.removeChild(listItem);
            });
            buttonsContainer.appendChild(completeButton);
            buttonsContainer.appendChild(deleteButton);
            listItem.appendChild(taskLabel);
            listItem.appendChild(buttonsContainer);
            return listItem;
        };
        MyFirstTsWidget.prototype.createButton = function (text, onClick) {
            var button = document.createElement('button');
            button.innerText = text;
            button.className = 'w3-button w3-small w3-round w3-margin-left ' +
                (text === 'Complete' ? 'w3-green' : 'w3-red');
            button.onclick = onClick;
            return button;
        };
        MyFirstTsWidget = __decorate([
            declare(_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin)
        ], MyFirstTsWidget);
        return MyFirstTsWidget;
    }());
    return MyFirstTsWidget;
});
//# sourceMappingURL=MyFirstTsWidget.js.map