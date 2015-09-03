import React from 'react';
import ReactPivot from 'react-pivot';

var PivotTable = React.createClass({
	render() {
		//prepare helper object to grap data binded values -> create data binder
		var dataBinder = this.props.dataBinder;


		var rows = dataBinder === undefined?this.props.rows:dataBinder.getValue(this.props.rows.path);
		var dimensions = dataBinder === undefined?this.props.dimensions:dataBinder.getValue(this.props.dimensions.path);

		if (rows === undefined) return <span>no data available</span>
		
		var reduce;
		if (this.props.reduce !== undefined) reduce = new Function(this.props.reduce.code)();
		var calculations;
		if (this.props.calculations !== undefined) calculations = new Function(this.props.calculations.code)();
		var rowsCount = (this.props.nPaginateRows !==undefined)?this.props.nPaginateRows:10;
		
		
		return (
			<ReactPivot rows={rows}
				dimensions={dimensions}
				reduce={reduce}
				calculations={calculations}
				nPaginateRows={rowsCount} />
		)
	}
});
module.exports = PivotTable;
