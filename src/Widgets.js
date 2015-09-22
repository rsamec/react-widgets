import _ from 'lodash';

const defaultImageUrl = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

export default {
	TextBoxInput: _.extend(require('./widgets/input/TextBoxInput'), {
		metaData: {
			props: {
				value: {mode: 'TwoWay'},
				placeholder: '',
				label: 'your label'
			},
			settings: {
				fields: {
					value: {type: 'bindingEditor', settings: {editing: false}},
				}
			}
		}
	}),
	CheckBoxInput: _.extend(require('./widgets/input/CheckBoxInput'), {
		metaData: {
			props: {
				checked: {mode: 'TwoWay'},
				label: 'your label'
			},
			settings: {
				fields: {
					checked: {type: 'bindingEditor', settings: {editing: false}}
				}
			}
		}
	}),
	TangleBoolText: _.extend(require('./widgets/input/TangleBoolText'), {
		metaData: {
			props: {
				value: {mode: 'TwoWay'},
				trueText: 'true condition',
				falseText: 'false condition'
			},
			settings: {
				fields: {
					value: {type: 'bindingEditor', settings: {editing: false}}
				}
			}
		}
	}),
	TangleNumberText: _.extend(require('./widgets/input/TangleNumberText'), {
		metaData: {
			props: {
				value: {mode: 'TwoWay'},
				min: 0,
				max: 100,
				step: 1,
				width: 100,
				pixelDistance: 1
			},
			settings: {
				fields: {
					value: {type: 'bindingEditor', settings: {editing: false}},
					min:{type:'number'},
					max:{type:'number'},
					step:{type:'number'},
					width:{type:'number'},
					pixelDistance:{type:'number'}
				}
			}
		}
	}),
	SelectBoxInput: _.extend(require('./widgets/input/SelectBoxInput'), {
		metaData: {
			props: {
				selectedItems: {mode: 'TwoWay'},
				options: undefined,
				multi: false
			},
			settings: {
				fields: {
					selectedItems: {type: 'bindingEditor', settings: {editing: false}},
					options: {type: 'bindingEditor', settings: {editing: false}},
					multi:{type:'boolean'}
				}
			}
		}
	}),
	TextBox: _.extend(require('./widgets/TextBox'), {
		metaData: {
			props: {
				content: 'type your text',
				font: undefined
			},
			settings: {
				fields: {
					content: {type: 'textEditor'},
					font:{type:'fontEditor'}
				}
			}
		}
	}),
	ValueBox: _.extend(require('./widgets/ValueBox'), {
		metaData: {
			props: {
				content: undefined,
				emptyValue: '---',
				font:undefined
			},
			settings: {
				fields: {
					content: {type: 'bindingEditor', settings: {editing: false}},
					font:{type:'fontEditor'}
				}
			}

		}
	}),
	HtmlBox: _.extend(require('./widgets/HtmlBox'), {
		metaData: {
			props: {
				content: 'type your content',
				columnCount: undefined,
				counterReset: undefined,
				font:undefined
			},
			settings: {
				fields: {
					content: {type: 'htmlEditor'},
					columnCount:{type:'number'},
					counterReset:{type:'number'},
					font:{type:'fontEditor'}
				}
			}
		}
	}),
	JSXBox: _.extend(require('./widgets/JSXBox'), {
		metaData: {
			props: {
				content: {
					code: 'return (<div>type your code</div>)',
					compiled: '(function(){return React.createElement("div",null,"type your code")})();'
				},
				input: undefined,
				output: {mode: 'TwoWay'},
				font:undefined
			},
			settings: {
				fields: {
					content: {type: 'codeEditor'},
					input: {type: 'bindingEditor', settings: {editing: false}},
					output: {type: 'bindingEditor', settings: {editing: false}},
					font:{type:'fontEditor'}
				}
			}
		}
	}),
	ImageBox: _.extend(require('./widgets/ImageBox'), {
		metaData: {
			props: {
				url: defaultImageUrl,
				width: 100,
				height: 100,
				border:{
					width: 2,
					radius: 20,
					color:'#000000',
					style:'solid'
				},
				margin: {
					top:5,
					left:5,
					bottom:5,
					right:5
				},
				padding:undefined
			}
		}
	}),
	ImagePanel: _.extend(require('./widgets/ImagePanel'), {
		metaData: {
			props: {
				width: 700,
				height: 400,
				content: 'type your content',
				bgColor: '#f7c10c',
				margin:{},
				padding:{
					top:10,
					right:10,
					bottom:10,
					left:10
				},
				border:{
					width: 3,
					radius: 10,
					color:'#000000',
					style:'solid'
				},
				imageAlign: 'topLeft',
				image: {
					url: defaultImageUrl,
					width: 100,
					height: 100,
					border:{
						width: 2,
						radius: 20,
						color:'#000000',
						style:'solid'
					},
					margin: {
						top:5,
						left:5,
						bottom:5,
						right:5
					},
					padding:{}
				},
				font:undefined
			},
			settings: {
				fields: {
					width:{type:'number'},
					height:{type:'number'},
					padding:{type:'boxSizeEditor'},
					margin:{type:'boxSizeEditor'},
					border:{type:'borderEditor'},
					imageAlign: {
						type: 'select',
						settings: {options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']}
					},
					image: {
						fields: {
							padding:{type:'boxSizeEditor'},
							margin:{type:'boxSizeEditor'},
							border:{type:'borderEditor'},
							width:{type:'number'},
							height:{type:'number'}
						}
					},
					bgColor: {type: 'colorPicker'},
					font:{type:'fontEditor'}
				}
			}
		}
	}),
	Pivot:  _.extend(require('./widgets/PivotTable'), {
		metaData: {
			props: {
				rows:undefined,
				dimensions:undefined,
				calculations:{
					code:"return [{title: 'Count',	value: 'count',className: 'alignRight'}];"
				},
				reduce:{
					code:"return function(row, memo) {memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount); return memo;}"
				},
				nPaginateRows:10
			},
			settings: {
				fields: {
					rows: {
						type: 'bindingEditor'
					},
					dimensions: {
						type: 'bindingEditor'
					},
					reduce: {
						type: 'codeEditor'
					},
					calculations: {
						type: 'codeEditor'
					}
				}
			}
		}
	}),
	Flipper:  _.extend(require('./widgets/Flipper'), {
		metaData: {
			props: {
				width:200,
				height:200,
				orientation:'horizontal',
				front:{
					bgColor:'#19489E',
					content:'type front text',
					font:undefined
				},
				back:{
					bgColor:'#9E1919',
					content:'type back text',
					font:undefined
				}
			},
			settings: {
				fields: {
					width:{type:'number'},
					height:{type:'number'},
					orientation: {
						type: 'select',settings:{options:['horizontal','vertical']}
					},
					front: {
						fields:{
							bgColor:{type: 'colorPicker'},
							content:{type:'htmlEditor'},
							font:{type:'fontEditor'}
						}
					},
					back: {
						fields:{
							bgColor:{type: 'colorPicker'},
							content:{type:'htmlEditor'},
							font:{type:'fontEditor'}
						}
					}
				}
			}
		}
	})
}
