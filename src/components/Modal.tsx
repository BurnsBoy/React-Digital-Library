import BookForm from "./BookForm";
import BookInfo from "./BookInfo";

type Props = {
    id?: string;
    open: boolean;
    onClose: () => void;
    data?: {}
}

const Modal = (props: Props) => {
    
    if (!props.open) return null;
    return(
        <div onClick={props.onClose} className="">
            <div
                className="form-modal"
                onClick={(e) => {
                    e.stopPropagation()
                }}>
                <button className="btn close-btn" onClick={props.onClose}>
                    X
                </button>
                <div className="">
                    {<BookForm/>}
                </div>
            </div>
        </div>
    )
}

export default Modal