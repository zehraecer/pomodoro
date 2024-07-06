import { useState } from 'react'
import './App.css'
import { useGlobalStateContext } from './store/globalStateContext'
import { Header } from './components/header'
import { Buttons } from './components/Buttons'
import { Content } from './components/Content'

function App() {
  const { state, dispatch } = useGlobalStateContext()
  const [counter, setCounter] = useState(0)

  console.log(state.isLoggedIn);
  const handleChangeInput = (e) => {
    setCounter(Number(e.target.value))
  }

  const handleLogin = () => {
    if (state.isLoggedIn)
      dispatch({ type: "LogoutUser" })
    else dispatch({ type: "LogInUser" })
  }

  return (
    <>
      {/* <div style={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
        {state.counter}
        <input type="number" value={counter} onChange={handleChangeInput} name="" id="" />
        <button onClick={() => dispatch({ type: "Increment", payload: counter })}>Increment</button>
        <button onClick={() => dispatch({ type: "Decrement", payload: counter })}>Decrement</button>
        <button onClick={() => dispatch({ type: "Impact", payload: counter })}>Impact</button>
      </div >
      <div>
        <button onClick={handleLogin} >{state.isLoggedIn ? "Logout" : "logIn"}</button>
      </div> */}

      <div className='container'>
        <Header />
        <Buttons />
        <Content />
      </div>

    </>
  )
}

export default App
