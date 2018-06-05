import React, { Component } from 'react'
import { Grid, Row, Col, Image, Panel } from 'react-bootstrap'
import travel_1 from '../images/1_travel-min.jpg'
import travel_2 from '../images/2_travel-min.jpg'
import travel_3 from '../images/3_travel-min.png'
import travel_4 from '../images/4_travel-min.jpg'
import travel_5 from '../images/5_travel-min.jpg'

class Travel extends Component {
  render() {
    return (
      <div>
        <h1 style={styles.mainHeadline}>Travel</h1>
        <h1 style={styles.subHeadline}>International</h1>
        <Grid>
          <Row>
            <Col xs={12} md={6} style={styles.medCol}>
              <Image src={travel_1} style={styles.medImage} />
              <Panel style={styles.medPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.medTitle}>Airplane</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={styles.type}>
                  Air travel remains the most popular way to reach Taniti. Flights depart from most major cities around
                  the world. The Taniti Airport is being renovated currently and within the next year we expect to be 
                  able to accomadate direct flights from larger cities such as New York and Los Angeles.
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={6} style={styles.medCol}>
              <Image src={travel_2} style={styles.medImage} />
              <Panel style={styles.medPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.medTitle}>Cruise Ship</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={styles.type}>
                  Arriving via cruise ship is another option for travelers. Taniti becomes one leg of a larger vacation.
                  Cruise ships offer various deals that include meals and lodging, offering a more economical option. Cruise 
                  ships also offer swimming pools, fitness centers, rock climbing walls and live music as added attractions.
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
          <h1 style={styles.subHeadline}>Local</h1>
        <Grid>
          <Row>
            <Col xs={12} md={4} style={styles.smallCol}>
              <Image src={travel_3} style={styles.smallImage}/>
              <Panel style={styles.smallPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.smallTitle}>Buses</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  Public buses are available in Taniti City and run daily from 5 AM to 11 PM. Private buses service
                  the remainder of the island. Both provide a cheaper alternative to renting a car and both have 
                  excellent safety records.
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={4} style={styles.smallCol}>
              <Image src={travel_4} style={styles.smallImage}/>
              <Panel style={styles.smallPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.smallTitle}>Rental Cars</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  The car rental agency near the Taniti Airport is the place to go for a nice set of wheels. They 
                  offer a wide range of vehiciles from economy through luxury. Outside of Taniti City there is very
                  little traffic and amazing scenery.
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={4} style={styles.smallCol}>
              <Image src={travel_5} style={styles.smallImage}/>
              <Panel style={styles.smallPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.smallTitle}>Bike or Walk</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  Bicycles can be rented in Taniti City from several different vendors. Make sure to wear a helmet,
                  which is a law. Ofcourse, the cheapest way to travel is to walk. Luckily, most of Taniti City is 
                  flat, making for nice walking.
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const styles = {
  mainHeadline: {
    fontSize: 60,
    textAlign: 'center',
    marginTop: '15vh',
    marginBottom: '15vh'
  },
  subHeadline: {
    fontSize: 45,
    marginLeft: '10vw',
    marginBottom: '10vh'
  },
  medCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  medImage: {
    height: '40vh',
    width: '50vh',
    marginBottom: '5vh'
  },
  medPanel: {
    width: '50vh',
    textAlign: 'justify'
  },
  medTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  smallCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallImage: {
    height: '25vh',
    width: '35vh',
    marginBottom: '5vh'
  },
  smallPanel: {
    width: '35vh',
    textAlign: 'justify'
  },
  smallTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  type: {
    fontSize: 16
  }
}

export default Travel