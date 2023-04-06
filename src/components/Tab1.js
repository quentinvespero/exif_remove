import React from 'react'
import ImportingFilesInterface from './sub-components/ImportingFilesInterface'
import DisplayFilesInterface from './sub-components/DisplayFilesInterface'

const Tab1 = () => {
    return (
        <div className='componentTab1'>
            <ImportingFilesInterface/>
            <DisplayFilesInterface/>
        </div>
    )
}

export default Tab1