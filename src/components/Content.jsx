import { useContext } from "react"
import { UserContext } from "../App"
export const Content = () => {

    const { setIsClicked, modalRef, minute, second, setSecond, setMinute, setState, istrue, setIsTrue, state } = useContext(UserContext)

    const handleClick = () => {
        setIsClicked(isClicked => !isClicked)
        modalRef.current.showModal()
    }
    const ornek = () => {
        setState(state => !state)
        if (second === 0 && minute === 0) {

            setSecond(59)
        }
        // setIsTrue(true)
        console.log(state);
    }
    return (

        <>
            <div>
                <div className="deneme">
                    <div className="content" onClick={ornek}>
                        <span >{minute}:{second} </span>
                        <h6> {state === true ? "PAUSE" : "START"} </h6>
                    </div>
                </div>

                <div className="shape" onClick={handleClick}>
                    <img src="shape.svg" alt="" />
                </div>
            </div>
        </>
    )
}