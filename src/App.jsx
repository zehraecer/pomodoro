import { createContext, useEffect, useRef, useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Buttons } from './components/Buttons'
import { Content } from './components/Content'
import { Modal } from './components/Modal'

export const UserContext = createContext()
function App() {
  const [isClicked, setIsClicked] = useState(false)
  const modalRef = useRef()
  const formRef = useRef()
  const [minute, setMinute] = useState("00")
  const [second, setSecond] = useState("00")
  const [state, setState] = useState(false)
  const [short, setShort] = useState(0)
  const [long, setLong] = useState(0)
  const [pomodoro, setPomodoro] = useState(0)
  const [isShort, setIsShort] = useState(false)
  const [isLong, setIsLong] = useState(false)
  const [isPomodoro, setIsPomodoro] = useState(false)
  const [istrue, setIsTrue] = useState(false)

  useEffect(() => {
    if (state === true) {
      let stopTime = setTimeout(() => {
        setSecond(second => second - 1)
        if (second === 0) {
          setMinute(minute => minute - 1)
          setSecond(59)
        }
      }, 100)
      if (minute === 0 && second === 0) {
        alert("süre bitti")
        return clearInterval(stopTime)
      }
      if (state === false) {
        return clearInterval(stopTime)
      }
      if (second.length === 1) {
        console.log("bhjgfbd");
      }
    }
  }, [minute, second, istrue, state])

  return (
    <UserContext.Provider value={{
      isClicked, setIsClicked, modalRef,
      formRef, minute, setMinute, second,
      setSecond, state, setState, short,
      setShort, istrue, setIsTrue, isShort,
      setIsShort, isLong, setIsLong, long,
      setLong, pomodoro, setPomodoro,
      isPomodoro, setIsPomodoro
    }}>
      <div className='container'>
        <Header />
        <Buttons />
        <Content />
        <Modal />
      </div>
    </UserContext.Provider>
  )
}

export default App
