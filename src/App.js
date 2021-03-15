import React, {useState} from 'react'
import useUpdate from './useUpdate.js'

const App = () => {
  const [n, setN] = useState(0)
  const onClick = () => {
    setN(n+1)
  }

  useUpdate(() => {
    console.log('变了')
  } ,n)  

  return (
    <div>n: {n}
       <button onClick={onClick}>+1</button>
    </div>
  )
}

export default App;