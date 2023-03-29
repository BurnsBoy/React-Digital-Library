import BookForm from "./BookForm";
import BookInfo from "./BookInfo";

type Props = {
    id?: string;
    open: boolean;
    onClose: () => void;
    data?: {}
    update?: boolean
}

const SelectionModal = (props: Props) => {
    
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
                    {!props.update ? <BookInfo data={props.data}/> : <BookForm id={props.id}/>}
                </div>
            </div>
        </div>
    )
}

export default SelectionModal