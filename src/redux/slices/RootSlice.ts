import { createSlice } from '@reduxjs/toolkit'

// TODO: Change api keys
const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: "Title",
        author_first_name: "Author First Name",
        author_last_name: "Author Last Name",
        year_published: "Year Published",
        language: "Language",
        words: "Word Count",
        description:"Description",
        genre: "Genre",
        isbn: "isbn",
        pages: "Pages"
    },
    reducers:{
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthorFirstName: (state, action) => { state.author_first_name = action.payload },
        chooseAuthorLastName: (state, action) => { state.author_last_name = action.payload },
        chooseYearPublished: (state, action) => { state.year_published = action.payload },
        chooseLanguage: (state, action) => { state.language = action.payload },
        chooseWords: (state, action) => { state.words = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        chooseGenre: (state, action) => { state.genre = action.payload },
        chooseIsbn: (state, action) => { state.isbn = action.payload },
        choosePages: (state, action) => { state.pages = action.payload }

    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthorFirstName, chooseAuthorLastName, chooseYearPublished, chooseLanguage, 
    chooseWords, chooseDescription, chooseGenre, chooseIsbn, choosePages } = rootSlice.actions