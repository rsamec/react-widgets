'use strict';

import React from 'react';

export default class ImageBox extends React.Component{
    render() {
        var style = {};
        if (this.props.height!==undefined) style.height = this.props.height;
        if (this.props.width!==undefined) style.width = this.props.width;
        return (
            <img src={this.props.url} style={style} width={style.width} height={style.height} />
        )
    }
}
