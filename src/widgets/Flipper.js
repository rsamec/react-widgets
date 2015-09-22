import React from 'react';
import styleFont from '../styles/font';
import _ from 'lodash';

export default class Flipper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {flipped: false};
	}
	flip() {
		this.setState({flipped: !this.state.flipped});
	}

	render() {
		var style = {};
		if (this.props.width !== undefined) style['width'] = this.props.width;
		if (this.props.height !== undefined) style['height'] = this.props.height;

		var front= this.props.front || {};
		var frontStyle = styleFont(front.font);
		if (front.bgColor !== undefined) frontStyle['backgroundColor'] = front.bgColor;


		var back= this.props.back || {};
		var backStyle = styleFont(back.font);
		if (back.bgColor !== undefined) backStyle['backgroundColor'] = back.bgColor;

		return (<div style={style} className={"flipper-container " + this.props.orientation} onClick={this.flip.bind(this)}>
			<div className={"flipper" + (this.state.flipped ? " flipped" : "")}>
				<Front style={frontStyle}>
					{front.content}</Front>
				<Back  style={backStyle}>{back.content}</Back>
			</div>
		</div>);
	}
}
class Front extends React.Component {
	render() {
		return (<div className="front tile" style={this.props.style} dangerouslySetInnerHTML={{__html: this.props.children}}></div>);
	}
}
class Back extends React.Component {
	render() {
		return (<div className="back tile" style={this.props.style} dangerouslySetInnerHTML={{__html: this.props.children}}></div>);
	}
}

