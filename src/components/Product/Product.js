import React from 'react'
import { Card, Image, Button, Grid } from 'semantic-ui-react';
import "./Product.css";

const product = (props) => (
    <Card>
        <Image src='https://images.pexels.com/photos/1591057/pexels-photo-1591057.jpeg?cs=srgb&dl=buttons-characters-concept-1591057.jpg&fm=jpg' />
        <Card.Content>
            <Card.Header>{props.productName}</Card.Header>
            <Card.Meta>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Card.Meta>
            <Card.Description>Available stock is {props.stock}</Card.Description>
            <Card.Description>${props.productPrice}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Grid columns={2}>
                <Grid.Column>
                    <Button color="blue" padded="very">Update</Button>
                </Grid.Column>
                <Grid.Column>
                    <Button color="red" size="medium">Delete</Button>
                </Grid.Column>
            </Grid>
        </Card.Content>
    </Card>
    
)

export default product