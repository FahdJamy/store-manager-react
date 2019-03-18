import React from 'react';
import { Form, Grid, Segment, Button, Header, Message } from 'semantic-ui-react';

import './Login.css';

const login = (props) => {

    return (
        <div className="LoginFormStyle">
            <Grid relaxed='very' stackable>
                <Grid.Column>
                    <Segment padded='very' color='green'>
                        <Header as='h1' color='teal' textAlign='center'>
                            Store manager Login
                        </Header>
                        <Form padded='very' error={props.invalidForm}>
                            { props.invalidForm ? <Message error content={props.errorMsg}/> : null }
                            
                            <Form.Input 
                                icon='user' 
                                iconPosition='left'
                                label='Username'
                                placeholder='Username'
                                required
                                color="red"
                                onChange={props.inputChanged}
                                name="username"/>
                            <Form.Input 
                                icon='lock'
                                iconPosition='left'
                                label='Password'
                                type='password'
                                placeholder='Password'
                                required onChange={props.inputChanged} name="password"/>
                            <Button color='blue' fluid basic size='huge' disabled={props.disabled} onClick={props.onSubmit} loading={props.loading}>
                                Login
                            </Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default login;
