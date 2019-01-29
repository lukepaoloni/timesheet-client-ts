import styled from 'styled-components'

const size = (props: any) => props.size || '600px'


export const StyledContainer = styled.div`
    background-color: #F3F3F3;
    flex: 1;
    background-image: ${(props: any) => `url('${props.headerImage}')` || ''};
    background-repeat: no-repeat;
    background-position: center top;
    background-size: ${size};
`