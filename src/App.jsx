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

  useEffect(() => {

    if (state === true) {
      let stopTime = setTimeout(() => {
        setSecond(second => second - 1)
        if (second === 0) {
          setMinute(minute => minute - 1)
          setSecond(59)
        }
      }, 1000)
      if (minute === 0 && second === 0) {
        return clearInterval(stopTime)
      }
    }
  }, [minute, second])

  return (
    <UserContext.Provider value={{ isClicked, setIsClicked, modalRef, formRef, minute, setMinute, second, setSecond, state, setState, short, setShort }}>
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
