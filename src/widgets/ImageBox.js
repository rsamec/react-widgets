import React from 'react';

export default class ImageBox extends React.Component{
    render() {
		var style = {};
		
		var size = this.props.margin || {};
		
		style.marginTop = size.top;
		style.marginRight = size.right;
		style.marginBottom = size.bottom;
		style.marginLeft = size.left;

		//padding
		size = this.props.padding || {};
		style.paddingTop = size.top;
		style.paddingRight = size.right;
		style.paddingBottom = size.bottom;
		style.paddingLeft = size.left;

		//border
		var border = this.props.border || {};
		style.borderWidth = border.width;
		style.borderRadius = border.radius;
		style.borderColor = border.color;
		style.borderStyle = border.style;

		//size
		style.height = this.props.height || 0;
		style.width = this.props.width || 0;
		
		return (
			<img src={this.props.url} style={style} width={style.width} height={style.height} />
		)
    }
}
