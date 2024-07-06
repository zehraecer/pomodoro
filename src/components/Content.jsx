import { useContext } from "react"
import { UserContext } from "../App"
export const Content = () => {

    const { isClicked, setIsClicked, modalRef } = useContext(UserContext)

    const handleClick = () => {
        setIsClicked(isClicked => !isClicked)
        modalRef.current.showModal()
    }
    return (

        <>
            <div>
                <div className="content">
                    <span >17:59 </span>
                    <h6>PAUSE</h6>
                </div>

                <div className="shape" onClick={handleClick}>
                    <img src="shape.svg" alt="" />
                </div>
            </div>
        </>
    )
}