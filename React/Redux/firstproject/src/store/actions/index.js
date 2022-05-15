const setData=(data)=>{
    console.log("setData called");
    return(dispatch)=>{//this dispatch is used to update data
        dispatch({type:"SETDATA",data:data})
        // dispatch({type:"SETDATA",payload:data})  //here payload is standard but we can use other names     
    }
}


// const seeProps=()=>{
//     console.log("seeProps called");
//     return(dispatch)=>{//this dispatch is used to update data
//         dispatch({type:"SEEPROPS"})

//     }
// }


export {setData};
//when redux state update render method executes