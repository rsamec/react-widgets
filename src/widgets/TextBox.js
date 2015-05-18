'use strict';

import React from 'react';
import styleFont from '../styles/font';

export default class TextBox extends React.Component {
    render() {
        return (<span style={styleFont(this.props.font)}>{this.props.content}</span>);
    }
}
