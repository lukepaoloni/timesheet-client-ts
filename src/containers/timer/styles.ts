import styled from 'styled-components'

export const StyledTimer: any = styled.span`
    font-size: 70px;
    color: ${(props: any) => props.type === 'secondary' ? '#868686' : '#51C285'};
    font-family: 'Roboto', sans-serif;
`