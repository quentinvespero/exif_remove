import React from 'react'
import { useDropzone } from 'react-dropzone'

const ImportingFilesInterface = () => {

    const onDrop = (uploadedFile) =>{
        let uploadedFiles = uploadedFile
        console.log(uploadedFiles)
        if (uploadedFiles.length < 10) {
            for (let index = 0; index < uploadedFiles.length; index++) {
                const file = uploadedFiles[index]
                if (file.size < 5000000) {
                    if (file.type.includes('image') || file.type.includes('text') || file.name.includes('png')) {
                        console.log('welcome onboard')
                    }
                }
                else{
                    console.log('the file : '+file.name+' is a bit too big unfortunately..')
                }
            }
        }
        else{
            console.log("aw unfortunately it seems like you're trying to add too many files at a time. Not more than 10 are allowed for now..")
        }
    }

    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    const importFiles = (e) =>{
        console.log(e.target)
    }

    return (
        <div className='ImportingFilesInterface'>
            <div className='dropFileArea' {...getRootProps()}>
                <input {...getInputProps()} />
                <p>drop your files here</p>
                <div className='divider'></div>
                <p className='text2'>{"(or click to add some)"}</p>
            </div>
            <br />
            <button className='buttonType1' onClick={importFiles}>{'confirmation'}</button>
        </div>
    )
}

export default ImportingFilesInterface