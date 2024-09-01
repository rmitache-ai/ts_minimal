import template = require('dojo/text!./MyFirstTsWidget.html');
import _WidgetBase = require("dijit/_WidgetBase");
import _WidgetsInTemplateMixin = require("dijit/_WidgetsInTemplateMixin");
import _TemplatedMixin = require("dijit/_TemplatedMixin");
import declare = require("more/DeclareDecorator");
import TextBox = require('dijit/form/TextBox');
import Textarea = require("dijit/form/Textarea");
import Select = require("dijit/form/Select");

interface MyFirstTsWidget extends _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin {}

@declare(_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin)
class MyFirstTsWidget implements MyFirstTsWidget {
    templateString: string = template;

    private taskInput: HTMLInputElement;
    private taskList: HTMLUListElement;

    postCreate() {
        this.taskInput = this.domNode.querySelector('#taskInput') as HTMLInputElement;
        this.taskList = this.domNode.querySelector('#taskList') as HTMLUListElement;
    }

    addTask(event: Event) {
        event.preventDefault();
        const taskText = this.taskInput.value.trim();
        if (taskText) {
            const taskItem = this.createTaskItem(taskText);
            this.taskList.appendChild(taskItem);
            this.taskInput.value = '';
        }
    }

    createTaskItem(taskText: string): HTMLLIElement {
        const listItem = document.createElement('li');
        listItem.className = 'w3-light-grey w3-round-large';;

        const taskLabel = document.createElement('span');
        taskLabel.innerText = taskText;
        taskLabel.className = 'w3-large';

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'w3-right';

        const completeButton = this.createButton('Complete', () => {
            taskLabel.classList.toggle('w3-text-green');
            taskLabel.style.textDecoration = taskLabel.style.textDecoration ? '' : 'line-through';
        });

        const deleteButton = this.createButton('Delete', () => {
            this.taskList.removeChild(listItem);
        });

        buttonsContainer.appendChild(completeButton);
        buttonsContainer.appendChild(deleteButton);

        listItem.appendChild(taskLabel);
        listItem.appendChild(buttonsContainer);

        return listItem;
    }

    private createButton(text: string, onClick: () => void): HTMLButtonElement {
        const button = document.createElement('button');
        button.innerText = text;
        button.className = 'w3-button w3-small w3-round w3-margin-left ' + 
            (text === 'Complete' ? 'w3-green' : 'w3-red');
        button.onclick = onClick;
        return button;
    }
}

export = MyFirstTsWidget;