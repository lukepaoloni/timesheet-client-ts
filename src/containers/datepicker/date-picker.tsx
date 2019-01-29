import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Button } from './button';
import { StyledContainer } from './styles';
const moment = require('moment');


class Datepicker extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            date: moment().format('ddd Do MMM')
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e: any) {
        let { format } = this.props as any;
        this.setState({
            date: moment(e).format(format || 'ddd Do MMM')
        })
    }

    render() {
        return (
            <StyledContainer {...this.props}>
                <DatePicker
                    onChange={this.handleChange}
                    customInput={< Button date={this.state.date} {...this.props} />}
                    {...this.props}
                />
            </StyledContainer>
        )
    }
}

export default Datepicker

