import styled from 'styled-components'

const size = (props: any) => {
    if (typeof props.size === 'number') {
        return `${props.size}px`
    }
    return props.size || '42px'
}
const background = (props: any) => props.background || 'none'

export const StyledIconButton = styled.button`
    height: ${size};
    width: ${size};
    border-radius: 100%;
    background: ${background};
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;
    margin-left: 30px;
    margin-right: 30px;
`

export const StyledIcon = styled.img`
    width: 60%;
`