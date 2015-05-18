'use strict';

import React from 'react';

export default class CheckBoxInput extends React.Component{
    render () {
        var valueModel = this.props.valueLink;
        var value = this.props.valueLink?valueModel.value:this.props.DefaultValue;
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
