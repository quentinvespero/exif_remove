import React, { useState } from 'react'
import ImportingFilesInterface from './sub-components/ImportingFilesInterface'
import DisplayFilesInterface from './sub-components/DisplayFilesInterface'
import ButtonCleanExif from './sub-components/ButtonCleanExif'

const Tab1 = () => {

    const [showComponent,setShowComponent] = useState(false)

    const handleButtonClick = (e) =>{
        console.log(e.target)
        setShowComponent(true)
    }

    return (
        <div className='componentTab1'>
            <ImportingFilesInterface/>
            {showComponent && <DisplayFilesInterface/>}
            <ButtonCleanExif onClickProps={handleButtonClick}/>
        </div>
    )
}

export default Tab1