import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div>
      <CustomButton count={count} setCount={setCount}>

      </CustomButton>
    </div>
  )
}

//component 

function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count+1);

  }
  return <button onClick={onClickHandler}>counter {props.count}</button>
}
export default App