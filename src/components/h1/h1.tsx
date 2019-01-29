import React from 'react'
import { StyledH1 } from './styles'

export default function H1(props: any) {
    return (
        <StyledH1 {...props}>
            {props.children}
        </StyledH1>
    )
}