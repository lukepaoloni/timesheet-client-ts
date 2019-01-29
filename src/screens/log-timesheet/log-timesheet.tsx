import React from 'react'
import headerImage from '../../assets/header-bg.svg'
import { Header, H1, Container, Input, Main, Icon, Spacer, Button, Select } from '../../components'
import { Row, Col, Grid } from 'react-flexbox-grid'
import { DatePicker, Timer } from '../../containers'


export default () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];
    return (
        <Container>
            <Main>
                <Grid>
                    <Row center="xs">
                        <Col xs={12}>
                            <Input placeholder="What's up?" />
                        </Col>
                    </Row>
                    <Row center="xs" between="xs">
                        <Col xs={6}>
                            <Select
                                placeholder="Project"
                                options={options}
                            />
                        </Col>
                        <Col xs={6}>
                            <Select
                                placeholder="Client"
                                options={options}
                            />
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Spacer space={80} />
                        <Col xs={12}>
                            <DatePicker />
                        </Col>
                        <Spacer />
                    </Row>
                    <Timer />
                </Grid>
            </Main>
        </Container>
    )
}
