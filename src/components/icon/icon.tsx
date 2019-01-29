import React from 'react'
import { StyledIconButton, StyledIcon } from './styles'

export default (props: any) => {
    return (
        <StyledIconButton {...props}>
            <StyledIcon {...props} />
            {props.children}
        </StyledIconButton>
    )
}