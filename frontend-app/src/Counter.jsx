import { Component } from "react";

export class Counter extends Component{

constructor(){
    super();
    this.state={
        count:0
    };
}

    render(){
        return(
            <>
            <h1> Count:{this.state.count} </h1>
            <button onClick={()=>{
                this.setState((pre)=>{
                return{count:pre.count+1};
                });
            }}
            >
                increment++</button>
            <button onClick={()=>{
                this.setState(()=>{
                return{count:0};
                })
             }}
             >
                reset</button>
            <button onClick={()=>{
                this.setState((pre)=>{
                    return{count:pre.count-1};
                });
            }}
            >
                decrement--</button>
            </>
        )
    }
}

export default Counter;