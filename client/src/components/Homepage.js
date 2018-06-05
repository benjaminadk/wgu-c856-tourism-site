import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image, Grid, Col, Row, Panel } from 'react-bootstrap'
import beach_couple from '../images/beach_couple-min.png'
import hotel_over from '../images/hotel_over-min.jpg'
import family_fun from '../images/family_fun-min.jpg'
import romance from '../images/romance-min.jpg'
import cuisine from '../images/cuisine-min.jpg'
import rainforest from '../images/rainforest-min.jpg'

class Homepage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div>
          <Image src={beach_couple} style={styles.mainImage} />
        </div>
        <div style={styles.overlay}>
          <h1 style={styles.headline}>Welcome to Taniti Island</h1>
        </div>
        <Grid>
          <Row style={styles.medRow}>
            <Col xs={12} md={6} style={styles.medCol}>
              <Image src={family_fun} style={styles.medImage} />
            </Col>
            <Col xs={12} md={6} style={styles.medCol}>
              <Panel style={styles.medPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.link}>
                    <Link to='/experience/0'>Family Fun</Link>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body style={styles.type}>
                  Taniti boasts fun activities for the whole family. From building sand castles to
                  hikes through the rain forrest to arcades and even bowling. Taniti has something for every
                  member of the family, and that is sure to make Mom and Dad happy.
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} style={styles.medCol}>
              <Image src={hotel_over} style={styles.medImage} />
            </Col>
            <Col xs={12} md={6} style={styles.medCol}>
              <Panel style={styles.medPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.link}>
                    <Link to='/experience/5'>Lodging</Link>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body style={styles.type}>
                  Wake up on the ocean's edge every morning at Taniti's 4 star luxury resort The Tanitian Gardens.
                  First class in every way, from an in house spa to breakfast buffet, right down to free WiFi. You
                  deverse the best and the best is what you get.
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row style={styles.bottomRow}>
            <Col xs={12} md={4} style={styles.bottomCol}>
              <Image src={romance} style={styles.bottomImage} />
              <Panel style={styles.bottomPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.bottomLink}>
                    <Link to='/experience/1'>Romance</Link>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body style={styles.type}>
                  Unforgetable sunsets and long walks on the beach are likely to rekindle the spark
                  of romance that is missing in day to day life.  Taniti is, and always will be a place
                  for lovers.
              </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={4} style={styles.bottomCol}>
              <Image src={rainforest} style={styles.bottomImage} />
              <Panel style={styles.bottomPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.bottomLink}>
                    <Link to='/experience/2'>Outdoors</Link>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body style={styles.type}>
                  Taniti is a natural wonder. White sand beaches. The brightest blue water on the planet. Acres
                  of wild rainforest and even a semi-active volcano. Endless adventure.
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={4} style={styles.bottomCol}>
              <Image src={cuisine} style={styles.bottomImage} />
              <Panel style={styles.bottomPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.bottomLink}>
                    <Link to='/experience/6'>Cuisine</Link>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body style={styles.type}>
                  Taniti has a long tradition of fishing dating back hundreds of years.  Enjoy some of the freshest
                  seafood and produce anywhere on earth while here in the Pacific.
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainImage: {
    height: '85vh',
    width: '100vw',
    marginBottom: '10vh'
  },
  overlay: {
    position: 'absolute',
    top: '70vh',
    textAlign: 'center'
  },
  headline: {
    fontSize: 70,
    color: 'white',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
  },
  medRow: {
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
    width: '50vh'
  },
  medPanel: {
    width: '50vh',
    textAlign: 'justify'
  },
  link: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  bottomLink: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  bottomRow: {
    marginTop: '10vh'
  },
  bottomCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomImage: {
    width: '35vh',
    height: '25vh',
    marginBottom: '10vh'
  },
  bottomPanel: {
    width: '35vh',
    textAlign: 'justify'
  },
  type: {
    fontSize: 16
  }
}

export default Homepage