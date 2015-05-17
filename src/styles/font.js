'use strict';

export function font(fontProps) {

	var style = {};
	if (fontProps === undefined) return style;

	if (fontProps.size !== undefined) style['fontSize'] = fontProps.size;
	if (fontProps.color !== undefined) style['color'] = fontProps.color;
	if (fontProps.bold) style['fontWeight'] = 'bold';
	if (fontProps.italic) style['fontStyle'] = 'italic';
	if (fontProps.underline) style['borderBottom'] = '1px dashed #999';
	return style;
}

