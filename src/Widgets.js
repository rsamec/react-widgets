import _ from 'underscore';

const defaultImageUrl = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

export default {
	TextBoxInput: _.extend(require('./widgets/input/TextBoxInput'), {
		metaData: {
			props: {
				value: {Mode: 'TwoWay'},
				placeholder: '',
				label: 'your label'
			},
			settings: {
				fields: {
					value: {type: 'bindingEditor', settings: {editing: false}}
				}
			}
		}
	}),
	CheckBoxInput: _.extend(require('./widgets/input/CheckBoxInput'), {
		metaData: {
			props: {
				checked: {Mode: 'TwoWay'},
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
				value: {Mode: 'TwoWay'},
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
				value: {Mode: 'TwoWay'},
				defaultValue: false,
				min: 0,
				max: 100,
				step: 1,
				width: 100,
				pixelDistance: 1
			},
			settings: {
				fields: {
					value: {type: 'bindingEditor', settings: {editing: false}}
				}
			}
		}
	}),
	SelectBoxInput: _.extend(require('./widgets/input/SelectBoxInput'), {
		metaData: {
			props: {
				selectedItems: {
					Path: '',
					Mode: 'TwoWay'
				},
				options: {
					Path: '',
					Mode: 'OneWay'
				},
				multi: false
			},
			settings: {
				fields: {
					selectedItems: {type: 'bindingEditor', settings: {editing: false}},
					options: {type: 'bindingEditor', settings: {editing: false}}
				}
			}
		}
	}),
	TextBox: _.extend(require('./widgets/TextBox'), {
		metaData: {
			props: {
				content: 'type your text',
				font: {
					color: '#000000'
				}
			},
			settings: {
				fields: {
					content: {type: 'textEditor'}
				}
			}
		}
	}),
	ValueBox: _.extend(require('./widgets/ValueBox'), {
		metaData: {
			props: {
				content: {},
				emptyValue: '---',
				font: {}
			},
			settings: {
				fields: {
					content: {type: 'bindingEditor', settings: {editing: false}}
				}
			}

		}
	}),
	HtmlBox: _.extend(require('./widgets/HtmlBox'), {
		metaData: {
			props: {
				content: 'type your content',
				columnCount: 0,
				counterReset: 0
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
				input: {},
				output: {Mode: 'TwoWay'},
				locales: {}
			},
			settings: {
				fields: {
					content: {type: 'codeEditor'},
					input: {type: 'bindingEditor', settings: {editing: false}},
					output: {type: 'bindingEditor', settings: {editing: false}},
					locales: {type: 'bindingEditor', settings: {editing: false}}
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
				padding:{}
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
				}
			},
			settings: {
				fields: {
					imageAlign: {
						type: 'select',
						settings: {options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']}
					},
					image: {
						fields: {
							padding:{type:'boxSizeEditor'},
							margin:{type:'boxSizeEditor'},
							border:{type:'borderEditor'}
						}
					},
					bgColor: {type: 'colorPicker'}
				}
			}
		}
	}),
	Pivot:  _.extend(require('./widgets/PivotTable'), {
		metaData: {
			props: {
				rows:{
					Path:''
				},
				dimensions:{
					Path:''
				},
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
					font:{}
				},
				back:{
					bgColor:'#9E1919',
					content:'type back text',
					font:{}
				}
			},
			settings: {
				fields: {
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
