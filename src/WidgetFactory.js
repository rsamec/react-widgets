'use strict';

export default class WidgetFactory {
	constructor() {
		var widgets = {
			'TextBoxInput': require('./widgets/TextBoxInput'),
			'CheckBoxInput': require('./widgets/CheckBoxInput'),
			'TextBox': require('./widgets/TextBox'),
			'ValueBox': require('./widgets/ValueBox'),
			'HtmlBox': require('./widgets/HtmlRenderer'),
			'ImageBox': require('./widgets/ImageBox'),
			'Flipper': require('./widgets/Flipper'),
			'JSXBox': require('./widgets/JSXBox')
		}
		['Rectangle','Circle', 'Ellipse','Line','Polyline'].each(function(name){
			widgets['Shapes.' + name] = Shapes[name];
		});
		
		this.widgets = widgets;
	}

	getWidgets() {
		return this.widgets;
	}
}
