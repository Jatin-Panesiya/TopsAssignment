import { useState } from "react"

const UpdateState = () => {

    const [num,setNum] = useState(0)

  return (
    <div> 
        <button onClick={()=>setNum(num +1)}>Increase</button>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num -1)}>Decrease</button>
    </div>
  )
}

export default UpdateState