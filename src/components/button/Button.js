import React, { useState } from 'react';
import './style.css'

export function Button(props) {
    const text = props.text
    const styleButton = props.styleButton
    const handleClick = props.handleClick
    return (
        <div className={styleButton} onClick={handleClick}>
            {text}
        </div>
    );
}
