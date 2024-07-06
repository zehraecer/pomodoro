import { useContext } from "react"
import { UserContext } from "../App"

export const Modal = () => {
    const { isClicked, setIsClicked, modalRef } = useContext(UserContext)
    const closeModal = () => {
        setIsClicked(isClicked => !isClicked)
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
                    <form className="modal-form">
                        <div>
                            <span>pomodoro</span>
                            <input type="number" />
                        </div>
                        <div>
                            <span>short break</span>
                            <input type="number" name="" />
                        </div>
                        <div>
                            <span>long break</span>
                            <input type="number" name="" />
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}