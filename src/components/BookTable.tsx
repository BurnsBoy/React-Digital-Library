interface BookTableProps {
  data: [];
  onOpen: (data: {}, id: string) => void;
  onClose: () => void;
}

const BookTable = (props: BookTableProps) => {
    return (
    <div>
        {props.data.map(({ id, title, author_first_name, author_last_name}, index) =>
            <div key = {id} className="book-item" onClick={() => props.onOpen(props.data[index], id)}>
                <div className="book-title">{title}</div>
                <div className="book-author">{author_last_name}, {author_first_name}</div>
            </div>,
        )}
    </div>
  )
}

export default BookTable