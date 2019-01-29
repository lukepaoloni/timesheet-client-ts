import React from 'react'
import { StyledMessage, StyledSuccess, StyledError } from './styles'
export default (props: any) => {
    if (props.type === 'success') {
        return (
            <StyledSuccess {...props}>
                {props.children}
            </StyledSuccess>
        )
    } else if (props.type === 'error') {
        return (
            <StyledError {...props}>
                {props.children}
            </StyledError>
        )
    } else {
        return (
            <StyledMessage {...props}>
                {props.children}
            </StyledMessage>
        )
    }
}