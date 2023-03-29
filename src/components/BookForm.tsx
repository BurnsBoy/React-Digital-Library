import Input from "./Input"
import { useForm } from "react-hook-form"
import{ server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseTitle, chooseAuthorFirstName, chooseAuthorLastName, chooseYearPublished, chooseLanguage, 
  chooseWords, chooseDescription, chooseGenre, chooseIsbn, choosePages } from "../redux/slices/RootSlice";

let clicked = false
interface BookFormProps {
  id?: string;
}
const BookForm = (props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any) => {
    if (!clicked){
      clicked = true
      if (props.id) {
        dispatch(chooseTitle(data.title));
        dispatch(chooseAuthorFirstName(data.authorFirstName));
        dispatch(chooseAuthorLastName(data.authorLastName));
        dispatch(chooseYearPublished(data.yearPublished));
        dispatch(chooseLanguage(data.language));
        dispatch(chooseWords(data.words));
        dispatch(chooseDescription(data.description));
        dispatch(chooseGenre(data.genre));
        dispatch(chooseIsbn(data.isbn));
        dispatch(choosePages(data.pages));
        server_calls.update(props.id, store.getState())
        setTimeout(() => {window.location.reload()}, 500)
        // setTimeout(() => {window.location.reload()}, 500);
      } else{
        dispatch(chooseTitle(data.title));
        dispatch(chooseAuthorFirstName(data.authorFirstName));
        dispatch(chooseAuthorLastName(data.authorLastName));
        dispatch(chooseYearPublished(data.yearPublished));
        dispatch(chooseLanguage(data.language));
        dispatch(chooseWords(data.words));
        dispatch(chooseDescription(data.description));
        dispatch(chooseGenre(data.genre));
        dispatch(chooseIsbn(data.isbn));
        dispatch(choosePages(data.pages));
        server_calls.create(store.getState());
        setTimeout(() => {window.location.reload()}, 500)
      }
    }
  }
  
  return (
    <div>
      <form onSubmit={(handleSubmit(onSubmit))}>
      <div className="book-info">
              <label htmlFor="title">Title</label>
              <Input {...register('title')} name='title' placeholder='Enter Title...'/>
      </div>
        <div className="info-box">
          <div className="info-column">
            <div className="book-info">
              <label htmlFor="authorFirstName">Author's First Name</label>
              <Input {...register('authorFirstName')} name='authorFirstName' placeholder="Enter Author's First Name..."/>
            </div>
            <div className="book-info">
              <label htmlFor="authorLastName">Author's Last Name</label>
              <Input {...register('authorLastName')} name='authorLastName' placeholder="Enter Author's Last Name..."/>
            </div>
            <div className="book-info">
              <label htmlFor="genre">Genre</label>
              <Input {...register('genre')} name='genre' placeholder='Enter Genre...'/>
            </div>
            <div className="book-info">
              <label htmlFor="year">Year</label>
              <Input {...register('yearPublished')} name='yearPublished' placeholder='Enter Year Published...'/>
            </div>
          </div>
          <div className="info-column">
            <div className="book-info">
              <label htmlFor="language">Language</label>
              <Input {...register('language')} name='language' placeholder='Enter Language...'/>
            </div>
            <div className="book-info">
              <label htmlFor="pages">Page Count</label>
              <Input {...register('pages')} name='pages' placeholder='Enter Page Count...'/>
            </div>
            <div className="book-info">
              <label htmlFor="words">Word Count</label>
              <Input {...register('words')} name='words' placeholder='Enter Word Count...'/>
            </div>
            <div className="book-info">
              <label htmlFor="isbn">ISBN</label>
              <Input {...register('isbn')} name='isbn' placeholder='Enter ISBN...'/>
            </div>
          </div>

        </div>
        <div className="book-info">
              <label htmlFor="description">Description</label>
              <Input {...register('description')} name='description' placeholder='Enter Description of Book...'/>
        </div>
        <div className="modal-btns">
          <button
          className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}



export default BookForm