'use strict';

var React = require('react');
var BindToMixin = require('react-binding');
var chainedFunction = require('../utils/createChainedFunction');
var TangleNumberText = require('./input/TangleNumberText');
var TangleBoolText = require('./input/TangleBoolText');

var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;
var FormattedDate = ReactIntl.FormattedDate;
var FormattedTime = ReactIntl.FormattedTime;
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedMessage = ReactIntl.FormattedMessage;
var FormattedHTMLMessage = ReactIntl.FormattedHTMLMessage;

//shortcuts
var TangleText = TangleNumberText;
var BoolText = TangleBoolText;

var _ = require('underscore');

export default class JSXBox extends React.Component {
	shouldComponentUpdate() {
		return true;
	}
	render(){
		//empty content
		if (this.props.content === undefined || this.props.content.compiled === undefined) return (React.createElement('span',{}, 'empty code'));

		try {
			
			var self = this;
			var input = this.props.input;
			var output = this.props.output;
			return (React.createElement('div',{}, eval(this.props.content.compiled)));
		}
		catch (err) {
			//error content
			return (React.createElement('span',{}, err.message));
		}
	}
}
