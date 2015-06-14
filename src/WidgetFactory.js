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
			'ImagePanel': require('./widgets/ImagePanel'),
			'Flipper': require('./widgets/Flipper'),
			'JSXBox': require('./widgets/JSXBox'),
			'react-pivot': require('./widgets/PivotTable'),
			'TangleBoolText':require('./widgets/TangleBoolText'),
			'TangleNumberText':require('./widgets/TangleBoolText'),
			'SelectBoxInput':require('./widgets/SelectBoxInput')
			
		}
		var Shapes = require('./widgets/Shapes');
		
		var shapeNames = ['Rectangle','Circle', 'Ellipse','Line','Polyline','CornerLine','CornerBox'];
		for (var i in shapeNames){
			var name = shapeNames[i];
			widgets['Shapes.' + name] = Shapes[name];
		};
		
		this.widgets = widgets;
	}

	getWidgets() {
		return this.widgets;
	}
}
