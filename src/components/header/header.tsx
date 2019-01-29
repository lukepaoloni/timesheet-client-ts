import React from 'react'
import { StyledHeader } from './styles'

export default (props: any) => {
    return (
        <StyledHeader >
            {props.children}
        </StyledHeader>
    )
}