import React from 'react'
import Select from 'react-select'

const styles = {
    option: (styles: any, state: any) => {
        return {
            ...styles,
            color: state.isFocused ? 'white' : '#B1B1B1',
            fontFamily: "'Work Sans',sans-serif",
            fontSize: '24px',
            backgroundColor: state.isFocused ? '#51C285' : null,
            cursor: state.isDisabled ? 'not-allowed' : 'pointer',
            textAlign: 'left'
        }
    },
    input: (provided: any, state: any) => ({
        color: '#51c285',
        fontFamily: "'Work Sans',sans-serif",
        fontSize: '24px'
    }),
    placeholder: (provided: any, state: any) => ({
        color: '#B1B1B1',
        fontFamily: "'Work Sans',sans-serif",
        fontSize: '24px'
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 0 50px rgba(0,0,0,0.09)',
        padding: '10px 0 10px 20px',
        minWidth: '100%',
        minHeight: '70px',
        cursor: 'pointer',
        fontFamily: "'Work Sans',sans-serif",
        fontSize: '24px',
        color: '#51c285',
    }),
    singleValue: (provided: any, state: any) => ({
        fontFamily: "'Work Sans',sans-serif",
        fontSize: '24px',
        color: '#51c285',
    }),
    indicatorSeparator: (provided: any, state: any) => ({
        display: 'none'
    }),
    dropdownIndicator: (provided: any, state: any) => ({
        ...provided,
        width: '50px',
        height: '30px'
    }),
}

export const StyledSelect = (props: any) => {
    return (
        <Select styles={styles} {...props} />
    )
}