import React, {Component, useState} from "react"

export default function Counter({initialCount}){
// export default class Counter extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: props.initialCount
  //   }
  // }
  // render() {
		const [count, setCount] = useState(initialCount);
    return (
      <div>
        {/* <button onClick={() => this.changeCount(-1)}>-</button> */}
				<button onClick={()=>{
					return setCount(prev=> prev-1)
				}}>-</button>
        <span>{count}</span>
        {/* <button onClick={() => this.changeCount(1)}>+</button> */}
				<button onClick={()=>{
					return setCount(prev=> prev+1)
				}}>+</button>
      </div>
    )
}
