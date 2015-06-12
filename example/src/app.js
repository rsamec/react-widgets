var React = require('react'),
	WidgetFactory = require('react-designer-widgets');

var App = React.createClass({
	createComponent: function (box) {
		var widgets = new WidgetFactory().getWidgets();
		var widget =widgets[box.elementName];
		if (widget === undefined){
			return React.DOM.span(null,"Component '" + box.elementName + "' is not register among widgets.")
		}

		return React.createElement(widget,box, box.content!== undefined?React.DOM.span(null, box.content):undefined);

	},
	render: function () {
		var style={height:'100%', width:'100%'};
		//var boxes = [];//this.transformToBoxes(this.props.objectSchema);
		var boxes = [
			{
				"name": "JSXBox",
				"elementName": "JSXBox",
				"style": {
					"top": 0,
					"left": 0
				},
				"content": "var valueModel = props.valueLink;\nif (valueModel === undefined) return <div>Empty value</div>\n\nreturn <div><FormattedNumber value={valueModel.value} style=\"currency\"  currency=\"USD\" /></div>",
				"Binding": {
					"Path": "amount",
					"Mode": "TwoWay"
				},
				"code": "(function() {var valueModel = {value:100};\nif (valueModel === undefined) return React.createElement(\"div\", null, \"Empty value\")\n\nreturn React.createElement(\"div\", null, React.createElement(FormattedNumber, {value: valueModel.value, style: \"currency\", currency: \"USD\"}))\n})();",
				"locales": {"Path": "locales"}
			}
		];
		return (
			<div style={style}>
				<div>
                {boxes.map(function (node, i) {
					var style = node.style;
					var component = this.createComponent(node);
					return (
						<div style={style}>
                            {component}
						</div>
					);
				}, this)}
				</div>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
