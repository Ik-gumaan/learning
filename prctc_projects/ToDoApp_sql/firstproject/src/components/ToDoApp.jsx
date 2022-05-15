import React from 'react';
import Axios from 'axios';

// import firebase from '../config/firebase';

class ToDoApp extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
            itemVal: "",
            i: 0,
            updateKey: 0,
            preUpdate: "",

        }
    }

    componentDidMount() {
        Axios.get('/api/todoitems/getItems')
            .then(res => this.setState({ items: res.data }))
    }

    // static getDerivedStateFromProps(props,state){
    //     // Axios.get('/api/todoitems/getItems')
    //     // .then(res=>this.setState({item:res.data}))
    // console.log("state-->",state)
    // return null;

    // }


    setVal = () => {
        if (this.state.itemVal != "") {

            var obj = { item: this.state.itemVal }

            this.setState({
                items: [...this.state.items, obj],
                itemVal: "",
            }, () => {
                var myKey = this.state.items.indexOf(obj)
                var myIndex = myKey;
                this.state.items[myIndex].itemKey = myKey;
                Axios.post('/api/todoitems/insert', { itemsList: this.state.items, index: myIndex })
                    // .then(console.log("data successfully sent"))
            })
        }
    }

    delAll = () => {

        this.setState(
            {
                items: [],
            }, () => {
                Axios.delete('/api/todoitems/delAll')
                    .then(console.log("DELETE ALL SUCCESS"))
            }
        )
    }

    del = (i) => {

        var delItemkey = this.state.items[i].itemKey;
        this.state.items.splice(i, 1);

        this.setState({
            items: this.state.items,
        }, () => {
            Axios.delete(`/api/todoitems/del/${delItemkey}`)
                // .then(console.log("DELETE ONE SUCCESS"))
        })
    }

    edit = (i) => {
        // this.state.preUpdate=this.state.items[i].item;
        // console.log("edit-->",this.state.items[i].item)
        this.state.items[i].edit = true;
        this.setState({
            items: this.state.items
        })
    }

    takeInp = (e, i) => {

        this.state.items[i].item = e.target.value;

        this.setState({
            items: this.state.items
        })
    }

    update = (v, i) => {
        this.state.items[i].edit = false;
        this.setState({
            items: this.state.items
        }, () => {
           var itemOb=this.state.items[i];
            Axios.put("/api/todoitems/update", {itemObj:itemOb})
                // .then(console.log("update ONE SUCCESS"))
        })
    }


    render() {
        return (
            <div className="main" >
                <h1 className="head" >To Do App</h1>
                <input className="inp" onChange={(e) => { this.setState({ itemVal: e.target.value }) }} type="text" name="" value={this.state.itemVal} id="" />
                <button className="inp-button" onClick={() => this.setVal()} >Add Item</button>
                <button className="inp-button" onClick={this.delAll} >Delete All</button>

                <ul className="list">{
                    this.state.items.map((val, index) => {
                        return (
                            <li className="list-item" key={index}>
                                {val.edit ? <input className="inp" type="" text value={val.item} onChange={(e) => this.takeInp(e, index)} /> : <span>{val.item}</span>}
                                {val.edit ? <button className="inp-button" onClick={() => this.update(val.item, index)}>Update</button> : <button className="inp-button" onClick={() => this.edit(index)}>Edit</button>}
                                <button className="inp-button" onClick={() => this.del(index)}>Delete</button></li>
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

