import React, { useState } from 'react'
import Button from '../components/Button'
import SelectButton from '../components/SelectButton'

const DisplayFilesInterface = ({ uploadedFiles }) => {

    return (
        <div className='displayFilesInterface'>
            <div className="mainPanel">
                <p>display files interface :3</p>
                {uploadedFiles.map((file,index)=>{
                    // console.log(file)
                    // <div key={file.size} className="fileTile">{file.path}</div>
                    <SelectButton key={index} filePath={file.path}/>
                })}
            </div>
            <Button/>
            <Button/>
        </div>
    )
}

export default DisplayFilesInterface