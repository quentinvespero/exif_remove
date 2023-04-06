import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const ImportingFilesInterface = () => {

    const onDrop = useCallback(acceptedFiles =>{
        
    },[])

    const {getRootProps,getInputProps,isDragActive} = useDropzone({onDrop})

    const importFiles = (e) =>{
        console.log(e.target)
    }

    return (
        <div className='ImportingFilesInterface'>
            {/* <button className='fileImport'>importer vos fichiers ici</button> */}
            <div className='dropFileArea'>
                <p>drop your files here</p>
                <div className='divider'></div>
                <p className='text2'>{"(or click to add some)"}</p>
            </div>
            <button className='buttonType1' onClick={importFiles}>{'confirm import file(s)'}</button>
        </div>
    )
}

export default ImportingFilesInterface