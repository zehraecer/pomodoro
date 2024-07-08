import { useContext } from "react"
import { UserContext } from "../App"

export const Buttons = () => {

    const { isShort, setIsShort, isLong, setIsLong, short, setMinute, setSecond, long, pomodoro, setPomodoro, isPomodoro, setIsPomodoro } = useContext(UserContext)

    const handleShortClick = () => {
        console.log("djkgnf");
        setIsShort(true)
        setMinute(short)
        setSecond("00")
    }
    const handleLongClick = () => {
        setIsLong(true)
        setMinute(long)
        setSecond("00")
    }
    const handlePomodoroClick = () => {
        setIsPomodoro(true)
        setMinute(pomodoro)
        setSecond("00")
    }

    return (

        <>
            <div className="btns">
                <a onClick={handlePomodoroClick} >pomodoro</a>
                <a onClick={handleShortClick} >short break</a>
                <a onClick={handleLongClick} >long break</a>
            </div>
        </>
    )
}