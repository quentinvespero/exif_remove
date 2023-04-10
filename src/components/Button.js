import React from 'react'

const Button = ({ onClickProps, text }) => {
    return (
        <button className='buttonType1' onClick={onClickProps}>{text}</button>
    )
}

export default Button