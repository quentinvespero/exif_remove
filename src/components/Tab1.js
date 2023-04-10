import React, { useEffect, useState } from 'react'
import ImportingFilesInterface from './sub-components/ImportingFilesInterface'
import DisplayFilesInterface from './sub-components/DisplayFilesInterface'
import Button from './sub-components/Button'

const Tab1 = () => {

    // variables relative to the display interface
    const [showImportingFilesInterface,setShowImportingFilesInterface] = useState(true)
    const [showDisplayFilesInterface,setShowDisplayFilesInterface] = useState(false)
    const [showButton,setShowButton] = useState(false)
    const [filesConfirmed,setFilesConfirmed] = useState(false)

    // variable for the text in the button
    const [buttonText, setButtonText] = useState('')

    // function for the text to display on the button
    useEffect(() =>{
        if (showImportingFilesInterface || showDisplayFilesInterface) {
            setButtonText('confirmation')
        }
        else if (filesConfirmed) {
            setButtonText('clean EXIF')
        }
        else setButtonText('?')
    },[showDisplayFilesInterface, showImportingFilesInterface, filesConfirmed])
    
    const handleFileImport = () =>{

        setShowImportingFilesInterface(false)
        setShowDisplayFilesInterface(true)
    }

    // function for handling which action to perform when pressing the button
    const handleButtonClick = (e) =>{
        console.log(e.target)

        if (buttonText === 'confirmation') {
            
            // uploading file
            setFilesConfirmed(true)
        }
        else if (buttonText === 'clean EXIF'){
            
            // clean exif of the files
            
        }
        else {
            console.log('an error occured')
        }
    }

    return (
        <div className='componentTab1'>
            {showImportingFilesInterface && <ImportingFilesInterface onImportFileProps={ handleFileImport }/>}
            {showDisplayFilesInterface && <DisplayFilesInterface/>}
            {showButton && <Button onClickProps={ handleButtonClick } text={ buttonText }/>}
        </div>
    )
}

export default Tab1