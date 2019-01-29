import styled from 'styled-components'

const space = (props: any) => {
    if (props.space) {
        if (typeof props.space === 'number') {
            return `${props.space}px`
        }
        return props.space
    }

    return '40px'
}

export const StyledSpacer = styled.div`
    flex-basis: 100%;
    height: ${space}
`