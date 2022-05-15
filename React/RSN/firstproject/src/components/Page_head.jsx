import React from 'react';

class Head extends React.Component{
    render(){
        return(
<div>
<h1 className="head center">{this.props.head}</h1>
</div>
)
}
}
export default Head;
