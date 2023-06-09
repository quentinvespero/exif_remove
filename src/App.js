import React, { useEffect, useState } from 'react'
import ImportingFilesInterface from './pages/ImportingFilesInterface'
import DisplayFilesInterface from './pages/DisplayFilesInterface'
import Button from './components/Button'

function App() {

    // variables relative to show/hide interface pages
    const [showImportingFilesInterface,setShowImportingFilesInterface] = useState(true)
    const [showDisplayFilesInterface,setShowDisplayFilesInterface] = useState(false)
    const [showEditFilesInterface, setShowEditFilesInterface] = useState(false)

    // variables relative to show/hide interface buttons
    const [showButton,setShowButton] = useState(false)
    const [files,setFiles] = useState([])
    const [filesConfirmed,setFilesConfirmed] = useState(false)

    // variable for the text in the button
    const [buttonText, setButtonText] = useState('')

    // follow somes variables state to display / hide elements
    useEffect(() =>{
        if (showImportingFilesInterface) {
            setButtonText('confirm')
        }
        else if (showDisplayFilesInterface) {
            setButtonText('add more files')
        }
        else if (showEditFilesInterface) {
            setButtonText('clean exif !')
        }
        else setButtonText('?')
    },[showDisplayFilesInterface, showImportingFilesInterface, filesConfirmed])
    
    // follow files variable state
    useEffect(()=>{
        if (files.length > 0) {
            console.log(files)
            
        }
    },[files])
    
    // function to handle file import.
    const handleFileImport = (importedFiles) =>{

        // set display interface
        setShowImportingFilesInterface(false)
        setShowDisplayFilesInterface(true)
        setShowButton(true)

        // handle files
        setFiles(importedFiles)
    }

    // function for handling which action to perform when pressing the button
    const handleButtonClick = () =>{
        // console.log(e.target)

        if (buttonText === 'confirmation') {
            
            // uploading file
        }
        else if (buttonText === 'clean EXIF'){
            
            // clean exif of the files
        }
        else {
            console.log('an error occured')
        }
    }

    return (
        <div className="app">
            <h1 className='appTitle'>{'choose some files in which you want to remove EXIF data from :)'}</h1>
            {showImportingFilesInterface && <ImportingFilesInterface onImportFiles={ handleFileImport }/>}
            {showDisplayFilesInterface && <DisplayFilesInterface uploadedFiles={ files }/>}
            {showButton && <Button onClickProps={ handleButtonClick } text={ buttonText }/>}
        </div>
    )
}

export default App