import React from 'react';
import styleFont from '../styles/font';

export default class HtmlBox extends React.Component{
   render() {
        //experimental - columnCount, counterReset
        var style = styleFont(this.props.font);
        if (this.props.columnCount !== undefined) style.WebkitColumnCount=this.props.columnCount;
        if (this.props.counterReset !== undefined) style.counterReset = 'item ' + (this.props.counterReset - 1);
        return (
            <div className="nestedList" style={style} dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        );
    }
}
