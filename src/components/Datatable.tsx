import { useEffect, useState } from 'react'
import Modal from './Modal'
import SelectionModal from './SelectionModal';
import { server_calls } from '../api/server';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import BookTable from "./BookTable";

// const columns: GridColDef[] = [
//     { field: 'title', headerName: 'Make', width: 150},
//     { field: 'author_first_name', headerName: 'Model', width: 150},
//     { field: 'author_last_name', headerName: 'Year', width: 150},
//     { field: 'year_published', headerName: 'Color', width: 150}
// ]

function Datatable() {
    const [ newBookOpen, setNewBookOpen ] = useState(false);
    const [ selectionOpen, setSelectionOpen ] = useState(false);
    const { bookData, getData } = useGetData();
    const [ selectionModel, setSelection ] = useState<string>()
    const [ selectionData, setSelectionData ] = useState<{}>()
    const [ isUpdating, setUpdating ] = useState<boolean>()


    const handleNewBookOpen = () => {
        setNewBookOpen(true)
        
    }

    const handleNewBookClose = () => {
        setNewBookOpen(false)
    }

    const handleSelectionOpen = (info: {}, id: string) => {
        setSelectionOpen(true)
        setSelectionData(info)
        setSelection(id)
        window.scrollTo(0,0)

    }

    const handleSelectionClose = () => {
        setSelectionOpen(false)
    }   


    const deleteData = () => {
        if (selectionModel){
            server_calls.delete(selectionModel);
        }
        getData();
        setTimeout(() => {window.location.reload() }, 500)
    }

  return (
    <>
        <div className="dash-btns">
            {!selectionOpen ? 
                <button
                    className="btn"
                    onClick={() => handleNewBookOpen()}>
                    Enter New Book
                </button>
            :
            <div>
                <button
                    className="btn"
                    onClick={() => setUpdating(!isUpdating)}>
                    Update
                </button>
                <button
                    className="btn"
                    onClick={deleteData}>
                    Delete
                </button>
            </div>
            
        }
            
            
        </div>
        <SelectionModal 
            id={selectionModel}
            open={selectionOpen}
            onClose={handleSelectionClose}
            data={selectionData}
            update={false}
        />
        {isUpdating ?
            <SelectionModal 
            id={selectionModel}
            open={selectionOpen}
            onClose={handleSelectionClose}
            data={selectionData}
            update={true}
            />
            :
            <></>
        }
        <Modal 
            open={newBookOpen}
            onClose={handleNewBookClose}
            data={{}}
        />
        {!newBookOpen ? 
        <div className="table">
            <h2 className="bookshelf-title">Bookshelf</h2>
            <BookTable 
                data={bookData}
                onOpen={handleSelectionOpen}
                onClose={handleSelectionClose}/>
        </div>     
        : null} 
    </>
  )
}

export default Datatable