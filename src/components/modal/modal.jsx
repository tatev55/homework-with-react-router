import {useState} from "react"
import "./modal.css"

const Modal = ({children}) => {
    const [open, setOpen] = useState(true);

    const handleModalClose = ()=> {
        setOpen(false)
    }

    return (
        open && (
            <div className={`modal ${open ? "open" : ""}`}>
              <button onClick={handleModalClose} className="close-modal">
                <i className="fa-solid fa-x"></i>
              </button>
              {children} 
            </div>
          )
    )

}

export default Modal;