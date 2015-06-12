var React = require('react');
var TangleText = require('./TangleText');
var BindToMixin = require('react-binding');

var ReactIntl = require('react-intl');

var IntlMixin = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;
var FormattedDate = ReactIntl.FormattedDate;
var FormattedTime = ReactIntl.FormattedTime;
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedMessage = ReactIntl.FormattedMessage;
var FormattedHTMLMessage = ReactIntl.FormattedHTMLMessage;

var JSXBox = React.createClass({
	mixins:[IntlMixin],
    render() {
        var div = React.createFactory('div');
        //empty content
        if (this.props.content === undefined) return div({},'type your code');

        try {

			//var assignReactCode = 'var React;if (React === undefined){React = _react || _react2;}';
			
			//compiled content
			var props = this.props;
			var self = this;

			return eval(this.props.code);
          
        }
        catch(err){
            //error content
            return div({}, err.message);
        }
    }
});
export default JSXBox; 
