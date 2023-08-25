import React from "react"
import DefaultButton from './styles'

const Button =()=>{
    const onClick = () =>{
        console.log('click')
    }
    return (
        <DefaultButton onClick={onClick}>Click me</DefaultButton>
    )
}

export default Button;