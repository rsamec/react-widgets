import React from 'react';
import ReactTools from 'react-tools';

export default class JSXBox extends React.Component{

    render() {
        var div = React.createFactory('div');
        //empty content
        if (this.props.content === undefined) return div({},'type your code');

        try {
            var code = ReactTools.transform(
                '(function() {' +
                this.props.content +
                '\n})();',
                {harmony: true}
            ).code;

            //compiled content
            var props = this.props;
            return eval(code);
        }
        catch(err){
            //error content
            return div({}, err.message);
        }
    }
};
