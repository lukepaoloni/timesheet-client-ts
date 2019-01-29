import React from 'react'
import { StyledInput } from './styles'

export default (props: any) => {
    return (
        <StyledInput {...props}>
            {props.children}
        </StyledInput>
    )
}