import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const ImportingFilesInterface = ({ onImportFiles }) => {

    const [curatedFiles,setCuratedFiles] = useState([])

    useEffect(()=>{
        if (curatedFiles.length > 0) {
            onImportFiles(curatedFiles)
        }
    },[curatedFiles])

    const onDrop = (uploadedFiles) =>{

        // console.log(uploadedFiles)
        
        // verifying that there are not much than 10 files
        if (uploadedFiles.length < 10) {

            // iterate over each files
            for (let index = 0; index < uploadedFiles.length; index++) {

                const file = uploadedFiles[index]

                // verifying files is not up to 5mo
                if (file.size < 5000000) {

                    // verifying that the type of the file is accepted
                    if (file.type.includes('image') || file.type.includes('text') || file.name.includes('png')) {

                        // importing curated files
                        setCuratedFiles(previouslyCuratedFiles => [...previouslyCuratedFiles, file])
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

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    // console.log(useDropzone())

    const importFiles = (e) =>{
        // console.log(e.target)
    }

    return (
        <div className='ImportingFilesInterface'>
            <div style={isDragActive ? {background:'#ffffff48',transform:'scale(0.97)'}: {}} className='dropFileArea' {...getRootProps()}>
                <input {...getInputProps()} />
                <p>drop your files here</p>
                <div className='divider'></div>
                <p className='text2'>{"(or click to add some)"}</p>
            </div>
            <br />
            {/* {showConfirmationButton && <button className='buttonType1' onClick={importFiles}>{'confirmation'}</button>} */}
        </div>
    )
}

export default ImportingFilesInterface