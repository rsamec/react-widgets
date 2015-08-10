import React from 'react';

export default class CheckBoxInput extends React.Component{
    render () {
        var valueModel = this.props.valueLink;
		var value = valueModel && valueModel.value || false;
        var handleChange = function (e) {
            valueModel.value = e.target.checked?true:false;
        };
        return (
            <label>
                <input type="checkbox"  checked={value} onChange={handleChange} />
                {this.props.label}
            </label>
        )
    }
};
