'use strict';

export default function font(fontProps) {

	var style = {};
	if (fontProps === undefined) return style;
	style = fontProps;
	if (fontProps.bold) style['fontWeight'] = 'bold';
	if (fontProps.italic) style['fontStyle'] = 'italic';
	if (fontProps.underline) style['borderBottom'] = '1px dashed #999';
	return style;
}

