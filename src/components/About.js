import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bill from './assets/bill.jpg'
import stephanie from './assets/stephanie.jpg'
import josh from './assets/josh.jpg'
import katie from './assets/katie.jpeg'
import "./Home.css";


function About() {

    const team = [
        {
            name: 'Bill Franklin', 
            role: 'Full Stack Developer',
            about: 'A fermented sausage and traditional cured meat enthusiast that loves to code, lead, learn, create, and problem solve.  His true heart is to see each and every person he meets achieve the best version of themselves and to see transformation and achievement of new heights professionally and personally.  He loves to encourage with words of affirmation and the challenge to understand each person’s unique situation.  The developing world has opened him up to new ways to create and challenge himself adding a dimension of satisfaction that has been non-existent in his life before now.',
            image: bill
        },
        {
            name: 'Katie Watson', 
            role: 'Full Stack Developer',
            about: 'As a board game aficionado and video game enthusiast, problem solving runs in her blood. This driving force is what has led her down several paths from healthcare to law to nonprofit work as she seeks to address the needs of the wider community. With her recent work in the nonprofit sector, a problem was identified and a passion awoke to help nonprofit organizations get their word and work on display to the world through technology.',
            image: katie
        },
        {
            name: 'Stephanie Delgado', 
            role: 'Frontend Developer',
            about: 'A problem solver with a love for research. Stephanie started learning to code in 2019, though it began as more of a hobby than a career focus. After a college education in Psychology and continuing to pursue that hobby by enlisting in a coding Bootcamp in 2021, Stephanie discovered another passion, her love for coding. Her ultimate goal is to utilize her knowledge and experience in behavioral health and her new software skills to continue serving underserved communities.', 
            image: stephanie
        },
        {
            name: 'Josh Law', 
            role: 'Frontend Developer',
            image: josh
        },
        {
            name: 'Caleb Smith', 
            role: 'Frontend Developer'
        }
    ]

    const displayTeam = () => {
        return team.map(({name, role, image, about}, i) => {
            return (
                <Row key={i} style={{paddingBottom: '80px'}}>
                    <Col xs='12' sm='12' md='5' lg='5' xl='6'>
                        <img variant="top" src={image} style={{padding: '5px'}} width= '215px' height='200px'/>
                        <h4>{name}</h4>
                        
                    </Col>
                    <Col xs='12' sm='12' md='7' lg='7' xl='6'>
                        <p style={{fontWeight: 'bold'}}>{role}</p>
                        <p style={{textAlign: 'left'}}>{about}</p>
                    </Col>
                </Row>
            )
        })
    }

  return (
    <Container>
        <Row style={{paddingTop: '15px', textAlign: 'center'}}>
            <Col xs='12' sm='12' md='12' lg='12' xl='12' style={{paddingBottom: '50px', paddingTop: '15px'}}>
                <h2 style={{paddingBottom: '20px'}}>About Us</h2>
                <p style={{width:'650px', textAlign:'left'}} class="d-flex justify-content-center">Our team is a talented, cross-generational, multi-ethnical group of leaders that strives for excellence in all arenas of life. This unique combination of drive and determination makes our projects come alive individually and corporately. This team also represents humility and the authentic learner spirit, which has contributed immensely to this project's collaborative nature and provides a shining example of working together. Each team member exemplifies the highest moral and ethical standard that allows the individual to stand out in any circle. We were handpicked for this project which led to the name Team Chosen. Without any further ado, please meet the talented individuals that make up our team.</p>
            </Col>
            <Col xs='12' sm='12' md='12' lg='12' xl='12'>
                <h2 style={{paddingBottom: '20px', paddingLeft: '15px'}}>Team Chosen</h2>
                {displayTeam()}
            </Col>
        </Row>
    </Container>



  )
  
}


export default About;


