import React, { Component } from 'react';
import { StyledTimer } from './styles';
import { Row, Col } from 'react-flexbox-grid';
import { Button, Spacer } from '../../components';
import { connect } from 'react-redux';

class Timer extends Component<any, any> {

    private _interval: any;

    constructor(props: any) {
        super(props)
        this.state = {
            startButton: 'Start',
        }
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.update = this.update.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    formatTime(timeInMs: any) {
        const time = new Date(timeInMs)
        let minutes = time.getMinutes().toString()
        let hours = Math.floor(parseInt(minutes) / 60).toString()
        let seconds = time.getSeconds().toString()

        if (hours.length < 2) {
            hours = '0' + hours
        }

        if (seconds.length < 2) {
            seconds = '0' + seconds
        }

        if (parseInt(hours) > 0) {
            return `${hours} : ${minutes} : ${seconds}`
        }

        return `${minutes}:${seconds}`
    }

    update() {
        this.props.dispatch({
            type: 'TICK',
            payload: {
                time: Date.now()
            }
        })

        this._interval = requestAnimationFrame(this.update)
    }

    componentWillMount() {
        if (this._interval) cancelAnimationFrame(this._interval)
    }

    start() {
        this._interval = requestAnimationFrame(this.update);

        this.props.dispatch({
            type: 'START_TIMER',
            payload: {
                offset: Date.now()
            }
        })
    }



    stop() {
        cancelAnimationFrame(this._interval)
        this.props.dispatch({
            type: 'STOP_TIMER',
        })
    }

    handleClick() {
        if (this.props.isOn) {
            console.log('...stopping')
            this.stop()
            this.setState({
                startButton: 'Start'
            })
        } else {
            this.start()
            this.setState({
                startButton: 'Stop'
            })
        }
    }

    render() {
        const { startButton } = this.state
        return (
            <Row center="xs">
                <Col xs={12}>
                    <StyledTimer type={startButton === 'Start' ? 'primary' : 'secondary'} {...this.props}>
                        {this.formatTime(this.props.time)}
                    </StyledTimer>
                </Col>
                <Spacer space={60} />
                <Col xs={12}>
                    <Button type={startButton === 'Start' ? 'primary' : 'secondary'} shadow className="start-button" onClick={this.handleClick}>
                        {this.state.startButton}
                    </Button>
                </Col>
            </Row>

        )
    }
}

const mapStateToProps = (state: any) => ({
    time: state.timer.time,
    isOn: state.timer.isOn
})

export default connect(mapStateToProps)(Timer)