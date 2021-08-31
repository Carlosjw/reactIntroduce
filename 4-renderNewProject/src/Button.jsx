import React from 'react'

function Button(props){
    
    const {name, onClick} = props // destructuring
    
    return (
        <button onClick={onClick}>{name}</button>
    )
}

export default Button