import React from 'react';
import Axios from 'axios';

class Abc extends React.Component {

  constructor() {
    super();
    this.state = {
      d:[],
      users: [],
      admins: [],
      myUser: [],
      u: "",
      data: "hi hello",
      
    }
  }


  componentDidMount() {
    // Axios.get('/api/getData/todoitems')
    // .then((res)=>this.setState({myUser:res.data}))
    // .then(console.log("getData"));

    // console.log("DID MOUNT")
      // Axios.post('/api/getData', { myUserArr: this.state.myUser })
      // .then(alert("data successfully sent"));

    // Axios.post('/api/getData',{myData:this.state.data})
    // .then(alert("muDATA successfully sent"));

    // Axios.get('/data/u')
    // .then(res=>console.log(res.data));

    fetch('/data/u')
      .then(res => res.json())
      .then(jsonData => this.setState({ users: jsonData.usersList }))

    fetch('/data/a')
      .then(res => res.json())
      .then(jsonData => this.setState({ admins: jsonData.adminsList }))

      fetch('/getData')
      .then(res => res.json())
      .then(jsonData => this.setState({d:jsonData}))
    //   Axios.get('/getData')
    // .then(res=>this.setState({database_data:res.data}));


  }

  addTodo=(u)=>{
   this.setState({
      myUser: [...this.state.myUser,u],
      u:""
    },()=>{
      Axios.post('/api/getData/todoitems', { myUserArr: this.state.myUser })
    .then(console.log("data successfully sent"));

    })      

  }


  render() {

    // console.log("userssss===>",this.state.users)
    // console.log("admins===>",this.state.admins)
    console.log("myUSers===>", this.state.myUser)
    // console.log("----------------------->",this.state.d)


    var users = this.state.users;
    var admins = this.state.admins;

    return (
      <div>
        REACT HERE!
        {/* {users.map(user=><li>{users}</li>)} */}

        <h1>Users</h1>
        <ul>{users.map((v, k) =>
          <li key={k}>{v.id + " " + v.name}</li>
        )}
        </ul>

        <h1>Admins</h1>
        <ul>{admins.map((v, k) =>
          <li key={k}>{v.name + " " + v.pos}</li>
        )}
        </ul>

        <h1>DATaBSE DATA</h1>
        <ul>{this.state.d.map((v, k) =>
          <li key={k}>{v.username+"  "+v.password}</li>
        )}
        </ul>


        <input onChange={(e) => { this.setState({ u: e.target.value }) }} type="text" name="myUser" id="" />
        <input onClick={() => { this.addTodo(this.state.u)}} type="button" value="submit" />
        {/* <input onClick={() => { this.sentToBack()}} type="button" value="sentt" /> */}
        <ul>{this.state.myUser.map((v, k) =>
          <li key={k}>{v}</li>
        )}
        </ul>
        
      </div>
      
    )
  }
}

export default Abc;

