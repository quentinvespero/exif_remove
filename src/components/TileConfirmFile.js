import React from 'react'

const TileConfirmFile = ({ file }) => {

    // creating a usable url to the uploaded file, to display the images
    const objectURL = URL.createObjectURL(file)

    // cutting the file names that are too long
    const shortenFileName = ((file.name),() => {

        const fileName = file.name
        const maxLength = 30

        if (fileName.length > maxLength) {
            const halfLength = maxLength / 2
            return fileName.slice(0,halfLength)+'...'+fileName.slice(-halfLength)
        }
        return fileName
    })

    return (
        <div className='tileConfirmFile'>
            
            {/* // showing images in case the file is an image */}
            {file.type.includes('image') 
                ? <img className='fileTypeImg' src={objectURL} alt="" />
                : <div className='fileTypeOther'>
            </div>}
            <div className="fileInformations">
                <p title={file.name}>{shortenFileName()}</p>

                {/* // we convert the size from bytes to MB, while rounding the numbers with 2 numbers after comma */}
                <p>{'last modifications : '+(file.lastModified)}</p>
                <p>{((file.size)/1000000).toFixed(2) +' Mb'}</p>
            </div>

        </div>
    )
}

export default TileConfirmFile