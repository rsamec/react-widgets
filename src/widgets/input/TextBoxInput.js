import React from 'react';

export default class TextBoxInput extends React.Component{
	render () {
		var valueModel = this.props.valueLink;
		var value = valueModel && valueModel.value || '';
		var handleChange = function (e) {
			valueModel.value = e.target.value;
		};
		return (
			<label>{this.props.label}
				<input type='text' value={value} placeholder={this.props.placeholder} onChange={handleChange}/>
			</label>
		)
	}
}
