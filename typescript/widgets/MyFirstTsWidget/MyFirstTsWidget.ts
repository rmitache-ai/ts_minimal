import template = require('dojo/text!./MyFirstTsWidget.html');
import _WidgetBase = require("dijit/_WidgetBase");
import _WidgetsInTemplateMixin = require("dijit/_WidgetsInTemplateMixin");
import _TemplatedMixin = require("dijit/_TemplatedMixin");
import declare = require("more/DeclareDecorator");

interface MyFirstTsWidget extends _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin {}

@declare(_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin)
class MyFirstTsWidget implements MyFirstTsWidget {
	templateString: string = template;

	subTitle: HTMLDivElement;

	openCity(evt) {
			
		var cityName = evt.target.innerText;
		
		this.subTitle.innerText = cityName;
		
		
		console.log("cityName", cityName);
		
		var i;
		var x = document.getElementsByClassName("city");
		for (i = 0; i < x.length; i++) {
			let item: any = x[i];
			item.style.display = "none";  // alle anderen ausblenden
		}

		this[cityName].style.display = "block";  
	}
}

export = MyFirstTsWidget;