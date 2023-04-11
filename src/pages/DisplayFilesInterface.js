import React, { useState } from 'react'
import Button from '../components/Button'
import SelectButton from '../components/SelectButton'

const DisplayFilesInterface = ({ uploadedFiles }) => {

    return (
        <div className='displayFilesInterface'>
            <div className="mainPanel">
                {uploadedFiles.map((file,index)=>{
                    return(<SelectButton key={index} file={file}/>)
                })}
            </div>
            <div className="buttons">
                <Button/>
                <Button/>
            </div>
        </div>
    )
}

export default DisplayFilesInterface