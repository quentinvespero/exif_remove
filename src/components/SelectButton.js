import React from 'react'
import TileConfirmFile from './TileConfirmFile'

const SelectButton = ({ filePath }) => {
    return (
        <div className='selectButton'>
            <TileConfirmFile nameFile={filePath}/>
        </div>
    )
}

export default SelectButton