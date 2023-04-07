import React, { useState } from 'react'
import ImportingFilesInterface from './sub-components/ImportingFilesInterface'
import DisplayFilesInterface from './sub-components/DisplayFilesInterface'
import ButtonCleanExif from './sub-components/ButtonCleanExif'

const Tab1 = () => {

    const [showImportingFileArea,setShowImportingFileArea] = useState(true)
    const [showDisplayFilesInterface,setShowDisplayFilesInterface] = useState(false)
    const [showButtonCleanExif,setShowButtonCleanExif] = useState(false)

    const handleFileImport = (e) =>{
        console.log(e.target)
        setShowImportingFileArea(false)
    }
    const handleButtonClick = (e) =>{
        console.log(e.target)
        // setShowImportingFileArea(false)
    }

    return (
        <div className='componentTab1'>
            {showImportingFileArea && <ImportingFilesInterface/>}
            {showDisplayFilesInterface && <DisplayFilesInterface/>}
            {showButtonCleanExif && <ButtonCleanExif onClickProps={handleButtonClick}/>}
        </div>
    )
}

export default Tab1