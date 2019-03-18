import React from 'react';
import { Form, Grid, Segment, Button, Header, Message } from 'semantic-ui-react';

import './SignupForm.css';

const signupForm = (props) => {
    return (
        <div className="SignupForm">
            <Grid relaxed='very' stackable>
                <Segment padded='very' color='green'>
                    <Header as='h1' textAlign='center' padded="very">
                        Register new sales attendant
                    </Header>
                    <Form error={props.setError}>
                        <div className="spaceComponents">
                            {props.registrationError ?
                                <Message error content={props.registrationError} color={props.green} /> : null
                            }
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                placeholder='Username'
                                required
                                label="Username"
                                onChange={props.inputChanged}
                                name="username"
                                error={props.usernameError} />
                            <Form.Input
                                icon="mail"
                                iconPosition='left'
                                placeholder='Phone number'
                                type='number'
                                required
                                label="Phone number"
                                onChange={props.inputChanged}
                                name="phone"
                                error={props.phoneError} />
                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                type='password'
                                placeholder='Password'
                                required
                                label="Password"
                                onChange={props.inputChanged}
                                name="password"
                                error={props.passwordError} />
                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                type='password'
                                placeholder='Confirm password'
                                required
                                label="Confirm password"
                                onChange={props.inputChanged}
                                name="cPassword" />
                        </div>
                        <div className="spaceComponents">
                            <Button
                                color='teal'
                                loading={props.loading}
                                size="big"
                                fluid
                                disabled={props.disabled}
                                loading={props.loading}
                                onClick={props.submitData}>
                                Register attendant
                            </Button>
                        </div>
                    </Form>
                </Segment>
            </Grid>
        </div>
    );
}

export default signupForm;
