import styled from 'styled-components'

export const StyledH1 = styled.h1`
    font-size: ${(props: any) => props.size || '42px'};
    color: ${props => props.color || '#FFFFFF'};
`