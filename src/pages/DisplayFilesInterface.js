import React, { useState } from 'react'
import Button from '../components/Button'
import SelectButton from '../components/SelectButton'

const DisplayFilesInterface = ({ uploadedFiles }) => {

    return (
        <div className='displayFilesInterface'>
            <p>display files interface :3</p>
            {uploadedFiles.map(file=>{
                // console.log(file)
                <div key={file.size} className="fileTile">{file.path}</div>
            })}
            <SelectButton/>
        </div>
    )
}

export default DisplayFilesInterface