import React, {useState} from "react"

export default function Counter({initialCount}){
		const [count, setCount] = useState(initialCount);
    return (
      <div>
				<button onClick={()=>{
					return setCount(prev=> prev-1)
				}}>-</button>
        <span>{count}</span>
				<button onClick={()=>{
					return setCount(prev=> prev+1)
				}}>+</button>
      </div>
    )
}
