import React from 'react'
import TileConfirmFile from './TileConfirmFile'

const SelectButton = ({ file }) => {
    return (
        <div className='selectButton'>
            <input className='checkboxSelectFile' type="checkbox" name="filesToKeep"/>
            <TileConfirmFile key={file.name} file={file}/>
        </div>
    )
}

export default SelectButton