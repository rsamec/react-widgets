'use strict';

import React from 'react';
import styleFont from '../styles/font';

export default class ValueBox extends React.Component{
    render () {

        var content = !!this.props.content?this.props.content:this.props.emptyValue;

        return (
            <span style={styleFont(this.props.font)}>{content}</span>
        )
    }
}
