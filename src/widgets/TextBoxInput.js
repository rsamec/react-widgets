import React from 'react';

export default class TextBoxInput extends React.Component{
    render () {
        var valueModel = this.props.valueLink;
        var value = this.props.valueLink?valueModel.value:this.props.DefaultValue;
        var handleChange = function (e) {
            valueModel.value = e.target.value;
        };
        return (
            <label>{this.props.label}
                <input type='text' value={value} onChange={handleChange}/>
            </label>
        )
    }
}
