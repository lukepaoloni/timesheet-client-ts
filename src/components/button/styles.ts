import styled from 'styled-components'

const bgColour = (props: any) => {
    if (props.type === 'primary') {
        return '#51C285'
    }

    if (props.type === 'secondary') {
        return '#D23F3F'
    }

    return props.colour || '#51C285'
}
const boxShadow = (props: any) => {
    if (props.shadow) {
        if (props.type === 'primary') {
            return 'rgba(82, 210, 141, 0.78)'
        }
        if (props.type === 'secondary') {
            return 'rgba(210, 63, 63, 0.78)'
        }
    }
}

export const StyledButton: any = styled.button`
    border: none;
    background-color: ${bgColour};
    border-radius: 5px;
    box-shadow: 0 0 50px ${boxShadow};
    text-align: center;
    padding: 25px 80px;
    font-size: 28px;
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-weight: medium;
    cursor: pointer;
    outline: none;
`