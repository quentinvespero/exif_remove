import React from 'react'

const ImportingFilesInterface = () => {
    return (
        <div className='ImportingFilesInterface'>
            {/* <button className='fileImport'>importer vos fichiers ici</button> */}
            <div className='dropFileArea'>
                <p>drop your files here</p>
                <div className='divider'></div>
                <p className='text2'>{"(or click to add some)"}</p>
            </div>
        </div>
    )
}

export default ImportingFilesInterface