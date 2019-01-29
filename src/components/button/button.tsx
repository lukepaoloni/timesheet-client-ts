import React from 'react'
import { StyledButton } from './styles'
import { ButtonProps } from './props';

export const Button: any = (props: ButtonProps) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}