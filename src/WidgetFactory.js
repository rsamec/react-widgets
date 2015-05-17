'use strict';

export class WidgetFactory {
	constructor() {
		this.widgets = {
			'TextBoxInput': require('./widgets/TextBoxInput'),
			'CheckBoxInput': require('./widgets/CheckBoxInput'),
			'TextBox': require('./widgets/TextBox'),
			'ValueBox': require('./widgets/ValueBox'),
			'HtmlBox': require('./widgets/HtmlRenderer'),
			'ImageBox': require('./widgets/ImageBox'),
			'Flipper': require('./widgets/Flipper'),
			'JSXBox': require('./widgets/JSXBox'),
			'TinyMceEditor': require('./widgets/HtmlRenderer')
		}
	}

	getWidgets() {
		return this.widgets;
	}
}
