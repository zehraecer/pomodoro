import { useContext } from "react"
import { UserContext } from "../App"
export const Content = () => {

    const { isClicked, setIsClicked, modalRef, minute, setMinute, second, setSecond } = useContext(UserContext)

    const handleClick = () => {
        setIsClicked(isClicked => !isClicked)
        modalRef.current.showModal()
    }
    return (

        <>
            <div>
                <div className="deneme">
                    <div className="content">
                        <span >{minute}:{second} </span>
                        <h6>PAUSE</h6>
                    </div>
                </div>

                <div className="shape" onClick={handleClick}>
                    <img src="shape.svg" alt="" />
                </div>
            </div>
        </>
    )
}