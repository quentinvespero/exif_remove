import React from 'react'

const TileConfirmFile = ({ file }) => {

    // creating a usable url to the uploaded file, to display the images
    const objectURL = URL.createObjectURL(file)

    return (
        <div className='tileConfirmFile'>
            
            {/* // showing images in case the file is an image */}
            {file.type.includes('image') 
                ? <img className='fileTypeImg' src={objectURL} alt="" />
                : <div className='fileTypeOther'>
            </div>}
            <div className="fileInformations">
                <p>{file.name}</p>

                {/* // we convert the size from bytes to MB, while rounding the numbers with 2 numbers after comma */}
                <p>{'last modifications : '+(file.lastModified)}</p>
                <p>{((file.size)/1000000).toFixed(2) +' Mb'}</p>
            </div>

        </div>
    )
}

export default TileConfirmFile