import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


function About() {

    const team = [
        {name: 'Bill Franklin', role: 'Backend Developer'},
        {name: 'Katie Watson', role: 'Backend Developer'},
        {name: 'Stephanie Delgado', role: 'Frontend Developer'},
        {name: 'Josh Law', role: 'Frontend Developer'},
        {name: 'Caleb Smith', role: 'Frontend Developer'}
    ]

    const displayTeam = () => {
        return team.map(({name, role}, i) => {
            return (
                <Card style={{ width: '25em', margin: '15px' }} key={i}>
                    <Row>
                        <Col xs='3' sm='3' md='3' lg='4' xl='4'>
                            <Card.Img variant="top" src="holder.js/100px180" style={{padding: '5px'}}/>
                        </Col>
                        <Col xs='9' sm='9' md='9' lg='8' xl='8'>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {role}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            )
        })
    }

  return (
    <Container>
        <Row style={{paddingTop: '15px'}}>
            <Col xs='12' sm='12' md='6' lg='6' xl='6'>
                <h2 style={{paddingBottom: '15px'}}>About Us</h2>
                <p style={{paddingRight: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan in nisl nisi. Morbi blandit cursus risus at ultrices mi tempus imperdiet. At risus viverra adipiscing at. Tincidunt dui ut ornare lectus sit amet est. Nunc mattis enim ut tellus elementum. Amet consectetur adipiscing elit pellentesque. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Velit sed ullamcorper morbi tincidunt ornare massa. Sodales ut etiam sit amet nisl. Commodo odio aenean sed adipiscing. Eu ultrices vitae auctor eu augue ut. Interdum posuere lorem ipsum dolor sit amet consectetur. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
            </Col>
            <Col xs='12' sm='12' md='6' lg='6' xl='6'>
                <h2 style={{paddingBottom: '15px', paddingLeft: '15px'}}>Team Chosen</h2>
                {displayTeam()}
            </Col>
        </Row>
    </Container>



  )
  
}


export default About;