import { useContext } from "react"
import { UserContext } from "../App"
export const Content = () => {

    const { setIsClicked, modalRef, minute, second, setSecond, setMinute, setState, state } = useContext(UserContext)

    const handleClick = () => {
        setIsClicked(isClicked => !isClicked)
        modalRef.current.showModal()
    }
    const ornek = () => {
        setState(state => !state)
        if (second === 0 || second === "00") {
            setSecond(59)
            setMinute(minute => minute - 1)
        }
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