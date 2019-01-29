import React from 'react'
import { StyledMain } from './styles'

export default (props: any) => {
    return (
        <StyledMain {...props}>
            {props.children}
        </StyledMain>
    )
}