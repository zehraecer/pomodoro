import { createContext, useRef, useState } from 'react'
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

  return (
    <UserContext.Provider value={{ isClicked, setIsClicked, modalRef }}>

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
