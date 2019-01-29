import React from 'react';
import { StyledButton, StyledIcon, StyledText } from '../styles'
import calendarIcon from '../../../assets/calendar.svg';

export const Button = (props: any) => {
    return (
        <StyledButton onClick={props.onClick} >
            <StyledIcon src={calendarIcon} />
            <StyledText> {props.date || `N/A`} </StyledText>
            {props.value}
        </StyledButton>
    );
}