import React from 'react';
import ReactTools from 'react-tools';
import TangleText from './TangleText';
import BindToMixin from 'react-binding';
import {FormattedDate, FormattedTime,FormattedRelative,FormattedNumber,FormattedMessage,FormattedHTMLMessage,IntlMixin} from 'react-intl';

var JSXBox = React.createClass({
	mixins:[IntlMixin],
    render() {
        var div = React.createFactory('div');
        //empty content
        if (this.props.content === undefined) return div({},'type your code');

        try {
			var codeToCompile = '(function() {' + this.props.content + '})();' 
            var code = ReactTools.transform(codeToCompile,{harmony: true});

			var assignReactCode = 'var React;if (React === undefined){React = _react || _react2;}'
			
			//compiled content
			var props = this.props;
			var self = this;
			return eval(assignReactCode + code);
          
        }
        catch(err){
            //error content
            return div({}, err.message);
        }
    }
});
export default JSXBox; 
