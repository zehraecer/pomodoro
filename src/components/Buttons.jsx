import { useContext } from "react"
import { UserContext } from "../App"

export const Buttons = () => {

    const { isShort, setIsShort, isLong, setIsLong, short, setMinute } = useContext(UserContext)

    const handleShortClick = () => {
        console.log("djkgnf");
        setIsShort(true)
        setMinute(short)
    }
    const handleLongClick = () => {
        setIsLong(isLong => !isLong)
    }


    return (

        <>
            <div className="btns">
                <a >pomodoro</a>
                <a onClick={handleShortClick} >short break</a>
                <a onClick={handleLongClick} >long break</a>
            </div>
        </>
    )
}