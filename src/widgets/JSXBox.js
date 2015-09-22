import styleFont from '../styles/font';
var React = require('react');

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
			return (React.createElement('div',{style:styleFont(this.props.font)}, eval(this.props.content.compiled)));
		}
		catch (err) {
			//error content
			return (React.createElement('span',{}, err.message));
		}
	}
}
