import styled from 'styled-components'

const primary = (props: any) => {
    if (props.primary) {
        return `:nth-of-type(odd) {
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
            border-bottom: none;
        }
        :nth-of-type(even) {
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
        }`
    } else {
        return `
            border-radius: 5px;
            margin-bottom: 40px;
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.09);
            border: none;
            ::placeholder {
                color: #B1B1B1;
            }
        `
    }
}

export const StyledInput = styled.input`
    height: 70px;
    font-size: 24px;
    outline: none;
    min-width: 100%;
    border: 1px solid #E8E8E8;
    padding-left: 20px;
    color: #51c285;
    font-family:'Work Sans', sans-serif;
    box-sizing: border-box;

    ::placeholder {
        color: #909090;
    }
    ${primary}
    
`