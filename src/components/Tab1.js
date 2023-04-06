import React, { useState } from 'react'
import ImportingFilesInterface from './sub-components/ImportingFilesInterface'
import DisplayFilesInterface from './sub-components/DisplayFilesInterface'
import ButtonCleanExif from './sub-components/ButtonCleanExif'

const Tab1 = () => {

    const [showComponent,setShowComponent] = useState(true)
    const [showComponent2,setShowComponent2] = useState(true)

    const handleFileImport = (e) =>{
        console.log(e.target)
        setShowComponent(false)
    }
    const handleButtonClick = (e) =>{
        console.log(e.target)
        setShowComponent(false)
    }

    return (
        <div className='componentTab1'>
            {showComponent && <ImportingFilesInterface/>}
            {!showComponent2 && <DisplayFilesInterface/>}
            <ButtonCleanExif onClickProps={handleButtonClick}/>
        </div>
    )
}

export default Tab1