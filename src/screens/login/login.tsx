import React from 'react'
import headerImage from '../../assets/header-bg.svg'
import googlePlus from '../../assets/google-plus.svg'
import bitbucket from '../../assets/bitbucket.svg'
import github from '../../assets/github-logo.svg'
import { Header, H1, Container, Input, Main, Icon, Spacer, Button } from '../../components'
import { Row, Col, Grid } from 'react-flexbox-grid';

class Login extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Container headerImage={headerImage}>
                <Header offset="35%">
                    <H1>Login</H1>
                </Header>
                <Main>
                    <Grid>
                        <Row center="xs">
                            <Col xs={12}>
                                <Input placeholder="Email" primary />
                                <Input placeholder="Password" primary />
                            </Col>
                            <Spacer space={60} />
                            <Icon size={62} src={googlePlus} background="#C04F43" />
                            <Icon size={62} src={bitbucket} background="#3254BE" />
                            <Icon size={62} src={github} background="#353434" />
                            <Spacer space={60} />
                            <Button shadow>
                                Login
                            </Button>
                        </Row>
                    </Grid>
                </Main>
            </Container>
        )
    }
}

export default Login