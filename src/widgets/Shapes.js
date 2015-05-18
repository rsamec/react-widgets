'use strict';

import React from 'react';

class SVGComponent extends React.Component {
	render() {
		return <svg {...this.props}>{this.props.children}</svg>
	}
}
class Rectangle extends React.Component {
	render() {
		return (
			<SVGComponent height={this.props.style.height} width={this.props.style.width}>
				<rect {...this.props}>{this.props.children}</rect>
			</SVGComponent>)
	}
}
class Circle extends React.Component {
	render() {
		return (
			<SVGComponent height={this.props.style.height} width={this.props.style.width}>
				<circle {...this.props}>{this.props.children}</circle>
			</SVGComponent>)
	}
}
class Ellipse extends React.Component {
	render() {
		return (
			<SVGComponent height={this.props.style.height} width={this.props.style.width}>
				<ellipse {...this.props}>{this.props.children}</ellipse>
			</SVGComponent>)

	}
}
class Line extends React.Component {
	render() {
		return (
			<SVGComponent height={this.props.style.height} width={this.props.style.width}>
				<line {...this.props}>{this.props.children}</line>
			</SVGComponent>)
	}
}
class Polyline extends React.Component {
	render() {
		return (
			<SVGComponent height={this.props.style.height} width={this.props.style.width}>
				<polyline {...this.props}>{this.props.children}</polyline>
			</SVGComponent>)
	}
}

export default {
	SVGComponent: SVGComponent,
	Rectangle: Rectangle,
	Circle: Circle,
	Ellipse: Ellipse,
	Line: Line,
	Polyline: Polyline
};

