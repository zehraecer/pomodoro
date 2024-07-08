import { useContext } from "react"
import { UserContext } from "../App"

export const Modal = () => {
    const { setIsClicked, modalRef, formRef, setMinute, setShort, setLong, setPomodoro } = useContext(UserContext)
    const closeModal = () => {
        setIsClicked(isClicked => !isClicked)
        modalRef.current.close()
    }
    const handleClick = (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const formObj = Object.fromEntries(formData.entries());
        setMinute([formObj.pomodoro])
        // if (formObj.short === null)
        console.log(formObj.short);
        if (formObj.short === "") {
            setShort(5)
        } else {
            setShort([formObj.short])
        }
        if (formObj.long === "") {
            setLong(10)
        } else {
            setLong([formObj.long])
        }
        setPomodoro([formObj.pomodoro])
        modalRef.current.close()
    }
    return (
        <>
            <dialog className="modal" ref={modalRef}>
                <div className="modal-header">
                    <span>Settings</span>
                    <h2 onClick={closeModal}>X</h2>
                </div>
                <div className="modal-middle">
                    <h3>TIME (MINUTES)</h3>
                    <form className="modal-form" ref={formRef}>
                        <div>
                            <span>pomodoro</span>
                            <input type="number" name="pomodoro" />
                        </div>
                        <div>
                            <span>short break</span>
                            <input type="number" name="short" />
                        </div>
                        <div>
                            <span>long break</span>
                            <input type="number" name="long" />
                        </div>
                        <button type="submit" onClick={handleClick}>Apply</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}