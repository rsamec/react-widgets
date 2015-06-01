import React from 'react';
import styleFont from '../styles/font';
import _ from 'underscore';

export default class Flipper extends React.Component {
	//getInitialState() {
	//	return {
	//		flipped: false
	//	};
	//}
	flip() {
		this.setState({flipped: !this.state.flipped});
	}

	render() {
		var fontStyle = styleFont(this.props.font);
		var style = {};
		if (this.props.width !== undefined) style['width'] = this.props.width;
		if (this.props.height !== undefined) style['height'] = this.props.height;

		var frontStyle = _.clone(fontStyle);
		if (this.props.frontColor !== undefined) frontStyle['backgroundColor'] = this.props.frontColor;

		var backStyle = _.clone(fontStyle);
		if (this.props.backColor !== undefined) backStyle['backgroundColor'] = this.props.backColor;

		return (<div style={style} className={"flipper-container " + this.props.orientation} onClick={this.flip}>
			<div className={"flipper" + (this.state.flipped ? " flipped" : "")}>
				<Front style={frontStyle}>{this.props.front}</Front>
				<Back  style={backStyle}>{this.props.back}</Back>
			</div>
		</div>);
	}
}
class Front extends React.Component {
	render() {
		return (<div className="front tile" style={this.props.style}>{this.props.children}</div>);
	}
}
class Back extends React.Component {
	render() {
		return (<div className="back tile" style={this.props.style}>{this.props.children}</div>);
	}
}

