import React, { useState } from 'react'
import TileConfirmFile from './TileConfirmFile'

const SelectButton = ({ file }) => {

    // variable for state of selection on file
    const [isSelected, setIsSelected] = useState(false)

    // toggle a class when select/unselect a file element
    const selectingItem = () => {
        setIsSelected(!isSelected)
    }

    return (
        <div className={`selectButton ${isSelected ? 'selectButton-selected':'selectButton-unselected'}`} onClick={ selectingItem }>
            {/* <input className='checkboxSelectFile' name="filesToKeep"/> */}
            <TileConfirmFile key={file.name} file={file}/>
        </div>
    )
}

export default SelectButton