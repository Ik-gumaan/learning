import React from 'react';
// import firebase from '../config/firebase';

class ToDoApp extends React.Component{

constructor(){
    super();
    this.state={    
        item:[],
        itemVal:"",  
        key:[]
    }
}

setVal=()=>{
if(this.state.itemVal != ""){
    var obj={name:this.state.itemVal}

    // var firebaseKey=firebase.database().ref("/item-list").push().key;
    // firebase.database().ref("item-list/"+firebaseKey).set(obj);


// firebase.database().ref("/item-list/"+firebaseKey).once("value",function(data){
// console.log(data.val());
// }
    
//     )


    this.setState({
        item:[...this.state.item,obj] ,
        itemVal:"",
        // key:[...this.state.key,firebasekey]

})
    }
}

delAll=()=>{
 

    // firebase.database().ref("/item-list/").remove();
 
     this.setState(
        {
            item:[]           
        }
    )
}

del=(i)=>{

    // firebase.database().ref("item-list/"+this.state.key[i]).remove();
    this.state.key.splice(i,1);
    this.state.item.splice(i,1);

this.setState({
    item:this.state.item,
    key:this.state.key
})
}

edit=(i)=>{
    console.log(this.state.item[i])
this.state.item[i].edit=true;
this.setState({
    item:this.state.item
})
}

takeInp=(e,i)=>{

    this.state.item[i].name=e.target.value;

    this.setState({
        item:this.state.item
    })
}

update=(i)=>{

    // firebase.database().ref("item-list/"+this.state.key[i]+"/name").set(this.state.item[i].name);

    this.state.item[i].edit=false;
    this.setState({
        item:this.state.item
    })  
    console.log(this.state.item[i])
}


render(){
  return(
<div className="main">
    <h1 className="head" >To Do App</h1>
<input className="inp" onChange={(e)=>{this.setState({itemVal:e.target.value }) }} type="text" name="" value={this.state.itemVal} id=""/>
<button className="inp-button" onClick={()=>this.setVal()} >Add Item</button>
<button className="inp-button" onClick={this.delAll} >Delete All</button>

<ul className="list">{
    this.state.item.map((val, index)=>{
        return(
        <li className="list-item" key={index}>
         {val.edit ? <input className="inp" type=""text value={val.name} onChange={(e)=>this.takeInp(e,index)} /> : <span>{val.name}</span>}
        {val.edit ? <button className="inp-button" onClick={()=>this.update(index)}>Update</button> : <button className="inp-button" onClick={()=>this.edit(index)}>Edit</button>} 
        <button className="inp-button" onClick={()=>this.del(index)}>Delete</button></li>
        )    
    }
    )
    }

</ul>
{/* <button onClick={()=>{this.dataView(this.state.item)}}> see database</button> */}
</div>
  )
}
}

export default ToDoApp;

