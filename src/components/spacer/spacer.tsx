import React from 'react'
import { StyledSpacer } from './styles'

export default (props: any) => {
    return (
        <StyledSpacer {...props}>
            {props.children}
        </StyledSpacer>
    )
}