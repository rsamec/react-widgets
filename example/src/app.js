var React = require('react'),
	WidgetFactory = require('my-component');

var App = React.createClass({
	createComponent: function (box) {
		var widgets = WidgetFactory.getWidgets()
		var widget =widgets[box.elementName];
		if (widget === undefined){
			return React.DOM.span(null,"Component '" + box.elementName + "' is not register among widgets.")
		}

		this.applyBinding(box);

		var props = _.omit(box,'style');
		return React.createElement(widget,props, box.content!== undefined?React.DOM.span(null, box.content):undefined);

	},
	render: function () {
		var style={height:'100%', width:'100%'};
		var boxes = [];//this.transformToBoxes(this.props.objectSchema);
		return (
			<div style={style}>
				<div>
                {boxes.map(function (node, i) {
					var element = node.element;
					var style = node.style;
					var component = this.createComponent(element);
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
