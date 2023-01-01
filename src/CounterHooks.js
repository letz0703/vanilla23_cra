import React, {useContext, useState} from "react"
import {ThemeContext} from "./App";

export default function Counter({initialCount}){
		const [count, setCount] = useState(initialCount);
		const style= useContext(ThemeContext)

    return (
      <div>
				<button onClick={()=>{
					return setCount(prev=> prev-1)
				}}
				style={style}
				>-</button>
        <span>{count}</span>
				<button onClick={()=>{
					return setCount(prev=> prev+1)
				}}
				style={style}
				>+</button>
      </div>
    )
}
