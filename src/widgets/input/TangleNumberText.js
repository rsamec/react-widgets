import React from 'react';
import formatNumber from '../../utils/formatNumber.js';

export default class TangleNumberText extends React.Component {
	render(){
		//support for two-way data binding
		var valueModel = this.props.valueLink;
		var handleChange = function (value) {
			valueModel.value = value;
		};

		//if no valueLink is provided - fallback to text representation of binding object 
		if (valueModel === undefined) valueModel = {value:JSON.stringify(this.props.value)};
		
		var step = this.props.step;
		var style = {display:'inline',color:'darkblue',borderBottom: '1px dashed black !important'};
		var format = function(value){
			if (value === undefined) return value;
			var fractionDigits = 0;
			if (step !== undefined) {
				var stepNumber = parse(step);
				var fractionDigits = (stepNumber < 1) ? Math.ceil(Math.log10(1 /stepNumber )) : 0;
			}
			return formatNumber(parse(value),fractionDigits, 3," ",",");
		};
		var parse = function(value){
			if (value === undefined) return undefined;
			if (isNaN(value)) return parseFloat(value.replace(",","."));
			return value;
		}
		return (
			<div style={style}>
				<TangleText value={valueModel.value || 0} onChange={handleChange}
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					className={this.props.className}
					pixelDistance={this.props.pixelDistance}
					width={this.props.width} 
					format= {format}
					onInput = {parse}/>
			</div>
		);
	}
}

//Copied and credits to: https://github.com/mapbox/react-tangle
var TangleText = React.createClass({
	propTypes: {
		value: React.PropTypes.number.isRequired,
		onChange: React.PropTypes.func.isRequired,
		min: React.PropTypes.number,
		max: React.PropTypes.number,
		step: React.PropTypes.number,
		pixelDistance: React.PropTypes.number,
		className: React.PropTypes.string,
		onInput: React.PropTypes.func,
		format: React.PropTypes.func
	},
	getDefaultProps: function() {
		return {
			min: -Infinity,
			max: Infinity,
			step: 1,
			pixelDistance: null,
			className: 'react-tangle-input',
			format: function(x) { return x; },
			onInput: function() { }
		};
	},
	componentWillMount: function() {
		this.__isMouseDown = false;
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({ value: nextProps.value });
	},
	getInitialState: function() {
		return { value: this.props.value || 0 };
		
	},
	bounds: function(num) {
		num = Math.max(num, this.props.min);
		num = Math.min(num, this.props.max);
		return num;
	},
	onChange: function(e) {
		this.setState({ value: e.target.value });
	},
	onBlur: function(e) {
		var parsed = parseFloat(this.state.value);
		if (isNaN(parsed)) {
			this.setState({ value: this.props.value });
		} else {
			this.props.onChange(this.bounds(parsed));
			this.setState({ value: this.bounds(parsed) });
		}
	},
	onMouseMove: function(e) {
		var change;
		if (this.props.pixelDistance > 0) {
			change = Math.floor((this.startX - e.screenX) / this.props.pixelDistance);
		} else {
			change = this.startX - e.screenX;
		}
		this.dragged = true;
		var value = this.bounds(this.startValue - (change * this.props.step));
		this.setState({ value: value });
		this.props.onInput(value);
	},
	onMouseDown: function(e) {
		// short circuit if currently editing number
		if (e.target === document.activeElement || e.button !== 0) return;
		this.__isMouseDown = true;

		e.preventDefault();

		this.dragged = false;
		this.startX = e.screenX;
		this.startValue = this.state.value;

		window.addEventListener('mousemove', this.onMouseMove);
		window.addEventListener('mouseup', this.onMouseUp);
	},
	onMouseUp: function(e) {
		if (this.__isMouseDown) {
			e.preventDefault();
			window.removeEventListener('mousemove', this.onMouseMove);
			window.removeEventListener('mouseup', this.onMouseUp);
			if (this.dragged) this.onBlur();
			this.__isMouseDown = false;
		}
	},
	onDoubleClick: function(e) {
		e.target.focus();
	},
	onKeyDown: function(e) {
		var value;
		if (e.which == 38) {
			// UP
			e.preventDefault();
			value = this.state.value + this.props.step;
			this.setState({ value: value });
			this.props.onInput(value);
		} else if (e.which == 40) {
			// DOWN
			e.preventDefault();
			value = this.state.value - this.props.step;
			this.setState({ value: value });
			this.props.onInput(value);
		} else if (e.which == 13) {
			// ENTER
			this.onBlur(e);
			e.target.blur();
		}
	},
	render: function() {
		var style = {webkitAppearance:'none', textAlign:'left',cursor:'col-resize',border:'0px solid'};
		//var style = {display:'inline', color:'darkblue',borderBottom: '1px dashed black'};
		if (this.props.width !== undefined) style.width = this.props.width;
		/* jshint ignore:start */
		var step = this.props.step || 1;
		
		return (
			<input style={style}
				className={this.props.className}
				disabled={this.props.disabled}
				type='text'
				onChange={this.onChange}
				onMouseDown={this.onMouseDown}
				onKeyDown={this.onKeyDown}
				onMouseUp={this.onMouseUp}
				onDoubleClick={this.onDoubleClick}
				onBlur={this.onBlur}
				value={this.props.format(this.state.value)}
				step = {step}/>
		);
		/* jshint ignore:end */
	}
});
