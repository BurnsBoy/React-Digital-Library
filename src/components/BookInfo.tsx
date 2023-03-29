import{ server_calls } from '../api/server'
interface BookInfoProps {
    id?: string
    data?: {
        title?: string,
        author_first_name?: string,
        author_last_name?: string,
        year_published?: number,
        language?: string,
        words?: number,
        description?: string,
        genre?: string,
        isbn?: number,
        pages?: number,
        }
  }


const BookInfo = (props: BookInfoProps) => {

    
  return (
    <div>
        <div className="book-title">{props.data ? props.data['title'] : ''}</div>
        <div className='info-box'>
            <div className='info-column'>
                <div className="book-info">{props.data ? `Author: ${props.data['author_first_name']} ${props.data['author_last_name']}` : ''}</div>
                <div className="book-info">{props.data ? `Genre: ${props.data['genre']}` : ''}</div>
                <div className="book-info">{props.data ? `Year Published: ${props.data['year_published']}` : ''}</div>
                <div className="book-info">{props.data ? `Language: ${props.data['language']}` : ''}</div>
            </div>
            <div className='info-column'>
                <div className="book-info">{props.data ? `Page Count: ${props.data['pages']}` : ''}</div>
                <div className="book-info">{props.data ? `Word Count: ${props.data['words']}` : ''}</div>
                <div className="book-info">{props.data ? `ISBN: ${props.data['isbn']}` : ''}</div>
            </div>         
        </div>
        <div className="book-description">{props.data ? `Description: ${props.data['description']}` : ''}</div>



        
    </div>
  )
}

export default BookInfo