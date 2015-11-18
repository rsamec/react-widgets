import React from 'react';

export default class TangleBoolText extends React.Component {
	render(){

		//support for two-way data binding
		var valueModel = this.props.valueLink;
		var handleChange = function (e) {
			//toogle value
			if (valueModel === undefined) return;
			valueModel.value = !valueModel.value;
		};
		
		var trueComponent = this.props.trueComponent || React.createElement('span',null,this.props.trueText);
		var falseComponent = this.props.falseComponent || React.createElement('span',null,this.props.falseText);

		//if no valueLink is provided - fallback to false
		var component = valueModel !== undefined && valueModel.value?trueComponent:falseComponent;
		
		var style = {display:'inline', color:'darkblue',borderBottom: '1px dashed black'};
		var tooltip = this.props.tooltip;
		var className = !!this.props.tooltip?"tangleTooltip":undefined;
		
		return (
			<div style={style} className={className} title={tooltip} onClick={handleChange}>
                {component}
			</div>
		);
	}
}
