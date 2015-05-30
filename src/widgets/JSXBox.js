import React from 'react';
import ReactTools from 'react-tools';

export default class JSXBox extends React.Component{

    render() {
        var div = React.createFactory('div');
        //empty content
        if (this.props.content === undefined) return div({},'type your code');

        try {
			var codeToCompile = '(function() {' + this.props.content + '})();' 
            var result = ReactTools.transform(codeToCompile,{harmony: true});
			
            //compiled content
            var props = this.props;
            return eval(result);
        }
        catch(err){
            //error content
            return div({}, err.message);
        }
    }
};
