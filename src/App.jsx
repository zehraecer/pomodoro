import { createContext, useEffect, useRef, useState } from 'react'
import './App.css'
// import { useGlobalStateContext } from './store/globalStateContext'
import { Header } from './components/header'
import { Buttons } from './components/Buttons'
import { Content } from './components/Content'
import { Modal } from './components/Modal'

export const UserContext = createContext()
function App() {
  // const { state, dispatch } = useGlobalStateContext()
  // const [counter, setCounter] = useState(0)
  const [isClicked, setIsClicked] = useState(false)
  const modalRef = useRef()
  const formRef = useRef()
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [state, setState] = useState(false)
  const [short, setShort] = useState(0)

  useEffect(() => {
    if (state === true)
      setTimeout(() => {
        setSecond(second => second - 1)
        if (second === 0) {
          setMinute(minute => minute - 1)
          setSecond(59)
        }
      }, 100)
    if (minute === 0 || second === 0) {
      return
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
