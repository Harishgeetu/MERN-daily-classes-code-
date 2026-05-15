import {useState} from "react";

const CounterFBC=(props)=>{


let [count,setCount]=useState(0);
console.log(props.fullDetails);


return(
<>
 <>
      <h3>Function Based Component</h3>
      <h4>props data: {props.role} , {props.fullDetails} </h4>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </>

</>
);
}
export default CounterFBC;